@echo off
setlocal enabledelayedexpansion

REM Check if the first argument is an XML file or a commit message
set XML_FILE=%~1

REM Initialize variables
set "COMMIT_MSG="
set "AUTHOR="

REM If an XML file is provided, extract commit message and author from it
if exist "%XML_FILE%" (
    for /f "tokens=*" %%i in ('xmllint --xpath "string(//commit/message)" "%XML_FILE%"') do set COMMIT_MSG=%%i
    for /f "tokens=*" %%i in ('xmllint --xpath "string(//commit/author)" "%XML_FILE%"') do set AUTHOR=%%i
) else (
    REM If no XML file is provided, check if a commit message is passed as an argument
    if "%~1"=="" (
        echo Error: No XML file or commit message provided.
        echo Usage: git-llm.bat <xml_file | "commit_message"> [author]
        exit /b 1
    )
    REM Set commit message from the first argument
    set "COMMIT_MSG=%~1"
    
    REM Set author if provided (optional second argument)
    if not "%~2"=="" (
        set "AUTHOR=%~2"
    )
)

REM Perform the Git commit
if "%AUTHOR%"=="" (
    git commit -m "%COMMIT_MSG%"
) else (
    git commit --author="%AUTHOR%" -m "%COMMIT_MSG%"
)

echo Git commit successful!
