import csv
import urllib.request
import codecs
import re
import sys
import math
import time
import json
import requests
import pyrebase
from time import gmtime, strftime
from datetime import datetime
from bs4 import BeautifulSoup

# Firebase config
config = {
  "apiKey": "AIzaSyAXmubiz-Iu_Jgz6RQQTUFHouzU6M4GzOc",
  "authDomain": "internlens-3c5b7.firebaseapp.com",
  "databaseURL": "https://internlens-3c5b7.firebaseio.com",
  "storageBucket": "internlens-3c5b7.appspot.com"
}
firebase = pyrebase.initialize_app(config)


# Get a reference to the auth service
email = ""
password = ""
auth = firebase.auth()
user = auth.sign_in_with_email_and_password(email, password)
user = auth.refresh(user['refreshToken'])
# target url
url = 'https://docs.google.com/spreadsheets/d/1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew/export?format=csv&id=1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew&gid=138064684'
# title fieldnames
title = []

mappingTable = {
    'Timestamp': 'Timestamp',
    '公司名稱': 'Name',
    '公司所屬產業': 'Catagory',
    '職稱或工作性質': 'Job_Title',
    '實習年份': 'Start_Year',
    '實習時間長度': 'Duration',
    '一週工時(hr.)': 'Week_Hour',
    '保險': 'Protection',
    '當初招募資訊': 'Path',
    '招募資訊相符程度[評分(1-5)]': 'PathRating',
    '實際情況與招募資訊的差異': 'Gap',
    '工作內容': 'Content',
    '薪資給付方式': 'PaymentType',
    '時薪': 'HourPayment',
    '時薪其他說明': 'HourPaymentInfo',
    '月薪': 'MonthPayment',
    '月薪其他說明': 'MonthPaymentInfo',
    '其他支薪方式': 'OtherPayment',
    '薪資合理程度[評分(1-5)]': 'PaymentRating',
    '覺得合理/不合理的原因': 'PaymentReason',
    '學習成效[評分(1-5)]': 'StudyRating',
    '學到的東西': 'Study',
    '對未來幫助程度[評分(1-5)]': 'FutureRating',
    '主要有幫助的點': 'Future',
    '綜合心得': 'Review',
    '推薦指數': 'TotalRating',
    '給學弟妹的意見': 'Advice',
    '聯絡資料': 'Contact'
}
while True:
    ### make url request
    ftpstream = urllib.request.urlopen(url)
    csvfile = csv.reader(codecs.iterdecode(ftpstream, 'utf-8'))
    line_counter = 1
    csv_rows = []
    csv_object = {}
    for row in csvfile:
        line_counter += 1
        if(line_counter == 6):
            title = row
        if(line_counter > 6):
            csv_object[line_counter - 7] = {mappingTable[title[i]]: row[i] for i in range(len(title))}
            csv_object[line_counter - 7]['ID'] = line_counter - 6

    ### Get a reference to the database service
    InternListData = {
        '0': {
            "ID": 0,
            "NAME": 'JIM',
            "CONTENT": 'YOOYOYOYOY'
        },
        "1": {
            "Duration": "",
            "Start_Year": "", "ID": 1, "Diff": "", "Gap": "", "Reason": "許多額外的活動常常需要我們犧牲假日時間去 當免費的勞力(搬東西收東西等等)，到比較遠的地方支援活動更需要我們自掏腰包出車資。",
            "Job_Title": "", "Reasonability": "不合理 ",
            "Review": "打著非營利組織之名行壓榨學生實習之實，常常說可以自由選擇參加活動，但若參加的活動不夠多卻又會被關切，還需要常常 半一些跟實習無關的自嗨活動，對實習生真的是非常的小氣以及不尊重。",
            "Protection": "", "Study": "", "Future": "", "Week_Hour": "0-10, 表定每週三小時，有時須額外犧牲假日時間", "Catagory": "", "Rating": "",
            "Content": "", "Advice": "", "Name": "時代基金會", "Timestamp": "14/12/2016 21:17:26", "Path": "", "Payment": "0"
        }
    }
    db = firebase.database()
    results = db.child('list').update(csv_object, user['idToken'])
    print('Fetch data, ', datetime.now())
    time.sleep(300)

### shut down the script
sys.stdout.flush()
typhoon_JSON.close()
sys.exit()
