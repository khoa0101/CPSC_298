import openai
import os
import sys

# Your OpenAI API key
openai.api_key = 'your-api-key'

# Check if a prompt is provided as a command-line argument
if len(sys.argv) > 1:
    custom_prompt = ' '.join(sys.argv[1:])
else:
    # If no command-line argument is provided, ask the user to input a custom prompt
    custom_prompt = input("Enter the prompt for the LLM to generate the commit message: ")

# Generate the commit message from the LLM based on the custom prompt
response = openai.Completion.create(
    model="text-davinci-003",
    prompt=custom_prompt,
    max_tokens=20  # Increase this value if you want a longer commit message
)

commit_message = response.choices[0].text.strip()

# Print the generated commit message
print(f'Generated Commit Message: "{commit_message}"')

# Call the batch script with the generated commit message
os.system(f'git-llm "{commit_message}"')
