def cartoon(img):
    import cv2
    import numpy as np
    #image cartoonizing
    numDownSamples = 2 # number of downscaling steps
    numBilateralFilters = 4 # number of bilateral filtering steps

    # -- STEP 1 --
    # downsample image using Gaussian pyramid
    img_color = img
    for _ in range(numDownSamples):
        img_color = cv2.pyrDown(img_color)

    # repeatedly apply small bilateral filter instead of applying
    # one large filter
    
    for _ in range(numBilateralFilters):
        img_color = cv2.bilateralFilter(img_color, 7, 15, 20) 
        #cv2.bilateralFilter(src, d, sigmaColor, sigmaSpace[, dst[, borderType]]) 

    # upsample image to original size
    
    for _ in range(numDownSamples):
        img_color = cv2.pyrUp(img_color)
    
    #sharpening the image
    filter = np.array([[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]])
    img_sharp = cv2.filter2D(img_color,-1,filter)
    img_sharp = cv2.filter2D(img_sharp,-1,filter)
    # img_final = cv2.blur(img_sharp,(5,5))
    img_final = cv2.GaussianBlur(img_sharp, (9, 9), 0)
    img_final = cv2.filter2D(img_final,-1,filter)

    #histogram_equalization
    

    # img = cv2.equalizeHist(img_weight)
    b, g, r = cv2.split(img_final)
    red = cv2.equalizeHist(r)
    green = cv2.equalizeHist(g)
    blue = cv2.equalizeHist(b)
    img = cv2.merge((blue, green, red))


    #brightness decrement
    value = 30
    lim = 60
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)
    
    v[v > lim] -= value    

    final_hsv = cv2.merge((h, s, v))
    img = cv2.cvtColor(final_hsv, cv2.COLOR_HSV2BGR)


    #signature
    # font 
    font = cv2.FONT_HERSHEY_SIMPLEX 

    # org 
    h,w,d = img.shape
    
    org = (w-60, h-16) 
    
    # fontScale 
    fontScale = 1

    # Blue color in BGR 
    color = (0, 0, 255) 

    # Line thickness of 1 px 
    thickness = 2

    # Using cv2.putText() method 
    img = cv2.putText(img, 'S.K.', org, font,  
                   fontScale, color, thickness, cv2.LINE_AA)     
    
    return img