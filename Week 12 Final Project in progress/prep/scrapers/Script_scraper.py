from bs4 import BeautifulSoup
import requests
 
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
}

url = 'https://www.seinfeldscripts.com/TheCaddy.html' #insert URL for script here 
html = requests.get(url, headers=headers)

soup = BeautifulSoup(html.content, 'html.parser')

results = soup.find(id='content')
script = results.find_all(align='left')
title = results.find_all('h1')

#this is to clean up all of the extra crap in the script body, I found out about .strip() after I made this
#but I dont know if I want to strip all extra data, I like having some control

for extraStuff in script:
    if extraStuff is not None:
        script_text = str(script[1]).replace('<br/>','').replace('<br>','').replace('<!-- BeginAd01 --><!-- EndAd -->','').replace('<!-- BeginAd02 --><!-- EndAd -->','').replace('<!-- BeginAd03 --><!-- EndAd -->','').replace('<!-- BeginAd04 --><!-- EndAd -->','').replace('<!-- BeginAd05 --><!-- EndAd -->','').replace('<!-- BeginAd06 --><!-- EndAd -->','').replace('<p align="left">','').replace('<p align="center">  </p>','').replace('<!-- InstanceEndEditable -->','').replace('</p>','')

for theTags in title:
    if theTags is not None:
        formattedTitle = str(title[0]).replace('<h1>','').replace('</h1>','')

with open(f'{formattedTitle}.txt', 'w') as f:
    f.write(script_text)

# print(formattedTitle)