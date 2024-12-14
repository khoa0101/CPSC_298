# autoeg.py

based on the example code for Python(AgentChat) in the readme at

https://github.com/microsoft/autogen

to install the requirements, first upgrade pip:
```bash
pip install --upgrade pip
```
then:
```bash
pip install 'autogen-agentchat==0.4.0.dev11' 'autogen-ext[openai]==0.4.0.dev11'
```
then run this file:
```bash
python3 autoeg.py
```
edit the agent names and system messages as desired.

OPEN AI KEY INSTRUCTIONS:
- Make a file called openai_key.py with this format:
```python
OPENAI_API_KEY = "xxx"
where xxx is your openai key.
```

## AutoGen Development Framework
