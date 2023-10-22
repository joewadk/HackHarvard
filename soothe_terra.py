import json
import datetime 
from sys import displayhook
from tkinter.tix import DisplayStyle
from terra.base_client import Terra

with open("apikey.json","r") as file:
    jsonBody = json.load(file)

apiKey = jsonBody["api_key"]
devId = jsonBody["dev_id"]

terra = Terra(apiKey,devId,secret='')
api_response = terra.list_providers()
parsed_api_response = api_response.get_parsed_response()
print(parsed_api_response)
Terra.get_sleep_for_user(
	user: 'Jawad Kabir',
	start_date: 2023-10-21 03:59:00,
	end_date: Optional[datetime.datetime] = None,
	to_webhook: bool = True
)