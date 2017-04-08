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
email = "EMAIL"
password = "PASSWORD"
auth = firebase.auth()
user = auth.sign_in_with_email_and_password(email, password)
user = auth.refresh(user['refreshToken'])
# target url
url = 'https://docs.google.com/spreadsheets/d/1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew/export?format=csv&id=1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew&gid=138064684'

# title fieldnames
title = []

mappingTable = {
    '實習的職稱或工作性質？': 'Job_Title',
    '承上，你覺得合理/不合理的主要原因是？': 'Reason',
    '公司有幫你保勞健保或是團保嗎？': 'Protection',
    '綜合來說，你對這個實習經驗的推薦指數': 'Rating',
    'Timestamp': 'Timestamp',
    '你覺得你做的這些職務與所得的薪資是合理的嗎？(滿分5分)': 'Reasonability',
    '實習期間的內容對你的未來有幫助或是學習到新東西嗎？': 'Future',
    '實習時間長度': 'Duration',
    '是從什麼時候開始實習的？': 'Start_Year',
    '你之前去哪實習呢？': 'Name',
    '有什麼建議可以給想申請同一個實習機會的學弟妹？': 'Advice',
    '你的實習有給薪嗎？有給薪的話時薪是多少呢?(NTD)': 'Payment',
    '你一週實習的工時大概多少呢？(hr.)': 'Week_Hour',
    '你實際參與的工作內容？': 'Content',
    '可以跟我們分享更多實際實習生訓練制度、學習方面心得？(好、壞皆可)': 'Review',
    '公司所屬產業？': 'Catagory',
    '你覺得實際的實習經驗對照當初招募資訊差異程度？': 'Gap',
    '主要有學到的東西或有幫助的地方是？': 'Study',
    '若覺得有差異，主要差在什麼部份？': 'Diff',
    '當初招募資訊': 'Path',

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
    time.sleep(60)

### shut down the script
sys.stdout.flush()
typhoon_JSON.close()
sys.exit()
