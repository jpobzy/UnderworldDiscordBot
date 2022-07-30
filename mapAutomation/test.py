import requests

link = "https://drive.google.com/file/d/1-0dZJ_Ax1lrfQOfeElsKHS5lTQ_ucQ3p/view?usp=sharing"
f = requests.get(link)
print(f.text)