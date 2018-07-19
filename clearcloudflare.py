import os
from requests import post
email = os.environ["cloudflareemail"]
apikey = os.environ["cloudflareapi"]
zone = os.environ['cloudflarezone']

endpoint = "https://api.cloudflare.com/client/v4/zones/{}/purge_cache".format(zone)

headers = {"X-Auth-Email": email, "X-Auth-Key": apikey, "Content-Type": "application/json"}


def clear_cache():
    print("Calling: " + endpoint + " to clear cache.")
    resp = post(endpoint, headers=headers, json={"purge_everything": True})
    return resp.json()


if __name__ == "__main__":
    result = clear_cache()
    print(result)
