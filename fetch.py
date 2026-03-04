import urllib.request
import re

req = urllib.request.Request(
    'https://www.linkedin.com/in/dhananjay-joshii/',
    data=None,
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
)

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    m = re.search(r'\"image\":\"([^\"]+)\"', html)
    if m:
        img_url = m.group(1).replace('&amp;', '&')
        print("FOUND:", img_url)
    else:
        # Try og:image
        m2 = re.search(r'property=\"og:image\" content=\"([^\"]+)\"', html)
        if m2:
             print("FOUND:", m2.group(1).replace('&amp;', '&'))
        else:
             print("No image found in HTML")
except Exception as e:
    print(f"Error fetching: {e}")
