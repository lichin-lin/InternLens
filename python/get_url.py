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
    '你之前去哪實習呢？': 'Name',
    '公司所屬產業？': 'Catagory',
    '實習的職稱或工作性質？': 'Job_Title',
    '是從什麼時候開始實習的？': 'Start_Year',
    '實習時間長度': 'Duration',
    '你一週實習的工時大概多少呢？(hr.)': 'Week_Hour',
    '公司有幫你保勞健保或是團保嗎？': 'Protection',
    '當初招募資訊': 'Path',
    '你覺得實際的實習經驗對照當初招募資訊相符程度？': 'PathRating',
    '若覺得有差距，主要是在什麼部份？': 'Gap',
    '你實際參與的工作內容？': 'Content',
    '你的實習薪資待遇是哪一種呢？': 'PaymentType',
    '那時薪是多少呢？(NTD)': 'HourPayment',
    '除了時薪外的其他說明': 'HourPaymentInfo',
    '那你的月薪是多少呢？(NTD)': 'MonthPayment',
    '除了月薪外的其他說明': 'MonthPaymentInfo',
    '你的給薪形式是什麼？多少錢呢(NTD)？': 'OtherPayment',
    '你覺得你做的這些職務與所得的薪資合理程度？(滿分5分)': 'PaymentRating',
    '承上，你覺得合理或不合理的主要原因是？': 'PaymentReason',
    '實習期間有學習到新東西嗎？': 'StudyRating',
    '主要有學習到的地方是？': 'Study',
    '實習期間的內容對你的未來有幫助嗎？': 'FutureRating',
    '主要有幫助的地方是？': 'Future',
    '可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)': 'Review',
    '綜合來說，你對這個實習經驗的推薦指數': 'TotalRating',
    '有什麼建議可以給想申請同一個實習機會的學弟妹？': 'Advice',
    '假如不介意讓有興趣的人進一步聯繫的話，可以留下聯絡資料喔～': 'Contact'
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
            print(title)
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
