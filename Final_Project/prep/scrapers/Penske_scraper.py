from selenium import webdriver #because the penskefile is a dynamic react website, I cant just parse
                                #the raw HTML, I need to let the page load then scrape, selenium helps with that
from bs4 import BeautifulSoup
import requests
import time

driver = webdriver.Chrome()

url = 'https://www.penskefile.com/episode/S07E12' #insert URL for episode here 
driver.get(url)

time.sleep(15)

getSource = driver.page_source

driver.quit()

soup = BeautifulSoup(getSource, 'html.parser')

results = soup.find(id='header')
episodeRows = results.find_all('div',class_ = 'episodeSubtitleRow row')

#the episode overview pages are formatted so that there are cells that contain the image, line
# and time stamp for every new line or group of lines, this creates and iterates over an index
# that contains all of these

for index, episodeRow in enumerate(episodeRows): 
    imageTag = episodeRow.find('img')
    if imageTag:
        imageLink = imageTag.get('src')
    if imageLink:
        #print ("YES")
        imageConfirm = requests.get(imageLink)        

    time_span = episodeRow.find('div', class_='time-span col-md-2 col-xs-3')
    scriptLine = episodeRow.find('div', class_='col-md-8 col-xs-5')

# stringifies and simplifies the time stamp and script line data

    filenameTimeTag = time_span.text.strip()
    ScriptTextContent = scriptLine.text.strip()

#testing stuff here

    # print(scriptLine.text.strip())
    # print(time_span.text.strip())

 #this writes the images from each episodeRow to a JPG and each script line to a text file
 # both with the timestamp embedded in the file name   

    with open(f'EPImage_{filenameTimeTag}.jpg', 'wb') as image_file:
        image_file.write(imageConfirm.content)

    with open(f'ScriptLine_{filenameTimeTag}.txt','w') as f:
        f.write(ScriptTextContent)