def sketch(img):
    import cv2
    import numpy as np

    #convert to gray scale
    grayImage = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    # grayImage, img1 = cv2.pencilSketch(img, sigma_s=60, sigma_r=0.07, shade_factor=0.05) 

    #invert the gray image
    grayImageInv = 255 - grayImage

    #Apply gaussian blur
    grayImageInv = cv2.GaussianBlur(grayImageInv, (21, 21), 0)

    #blend using color dodge
    img = cv2.divide(grayImage, 255-grayImageInv, scale=256.0)
    imag = cv2.GaussianBlur(grayImageInv, (5, 5), 5)

    img = cv2.adaptiveThreshold(img,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,11,2)

    



    img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)

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
    img_1 = cv2.putText(img, 'S.K.', org, font,  
                   fontScale, color, thickness, cv2.LINE_AA) 
    return img_1