from django.test import TestCase
import random
phonelist= ['LG G5','Zte Z987','Samsung Galaxy Note','Zte A2016','Samsung Galaxy Note2', 'Xiaomi 2014817','Samsung Galaxy Note3','Samsung Galaxy S4','Samsung Galaxy Nexus','Samsung Galaxy TabS','Xiaomi Redmi Note3','Sony Experia Z3' ,'Asus ASUS_T00F', 'Cw-hi12 CW-Hi12', 'Enspert GETAWAY', 'Getac Z710', 'Homtom HT3 Pro', 'HTC HTC6535LVW', 'HTC X315E', 'Huawei MediaPad', 'Huawei Y321-U051', 'Kata i1', 'Lenovo A7600-H', 'Lenovo S960', 'LG D806', 'LG K210', 'LG P705g', 'Mit Droid4X-WIN', 'Motorola XT1033', 'Nokia Nokia_X', 'Samsung GT-S6310', 'Samsung SM-G360H', 'Samsung SM-J120A', 'Sharp SH-01G', 'Sony D6502', 'Sony SO-02C', 'Tch M2101', 'Tct Orange Hiro' ]
def retrphone():
    return phonelist[len(phonelist)%(int(random.random()*10)+1)]


def retrpercent(num) :
    if num==1:
        return [1]
    else:
         retarr=[]
         initial=round(random.random(),2)
         while initial>0.5:
             initial = round(random.random(),2)
         deux=1-initial
         retarr.append(initial)
         retarr.append(deux)
         if num == 2:
            return retarr
         else :
            for i in range (0,num-2):
                oldorg=retarr[i+1]
                retarr[i+1]=round((retarr[i+1]*(random.random())),2)
                retarr.append(round((oldorg-retarr[i+1]),2))
            return retarr



def rethund(num):
    retarr=[]
    for i in retrpercent(num):
        retarr.append(int(i*100))
    return retarr

def retphones(num):
    retarr=phonelist
    while len(retarr)>num:
        try:
            retarr.pop(len(retarr) % (int(random.random() * 10)))
        except:
            pass
    return retarr


# Create your tests here.
