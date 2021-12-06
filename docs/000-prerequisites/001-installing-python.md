# Installing Python and disnake

## Installing Python

To use disnake, you'll need to install [Python][python]. Like most other [`discord.py`]({{ dpydocs }}) forks, disnake
supports Python 3.8 or higher.

!!! Note

    To check if you already have Python installed on your system, you can run `python --version` in your terminal. If the output shows `Python 3.8` or higher, you can proceed to the next step. Otherwise, continue reading this article.

-   On Windows, you can simply install it via the .exe file, which can be downloaded from [the Python website][python].
    Just open the downloaded file and follow the steps via the installer.

-   On macOS, you can visit [the Python website][python] to download the latest version, open the package installer and
    follow the instructions. Alternatively, you can use [`Homebrew`][brew] to install Python, by running
    `brew install python`

-   On Linux, you can either direcly look for the source code on
    [the Python website](https://www.python.org/downloads/source/), or follow the steps on [this
    article][opensource-linux] to determine how you should install Python.

## Preparing the essentials

To use disnake, you'll need to install it via `pip`, which is Python's standard package manager. Since pip comes
standard with Python 3.4 and above, there is no need to separately install it. However, it is recommended that you set
up a new project folder.

Navigate to a suitable place on your machine and create a new folder named `disnake-bot` (or whatever you prefer). Next
you'll need to open your terminal.2

### Opening the terminal

!!! Tip Inline End

    If you use [Visual Studio Code](https://code.visualstudio.com/), you can press <code>Ctrl + `</code> (backtick) to open its integrated terminal.

-   On Windows, either:

    -   `Shift + Right-click` inside your project directory and choose the "Open command window here" option
    -   Press `Win + R` and run `cmd.exe`, and then `cd` into your project directory

-   On macOS, either:

    -   Open Launchpad or Spotlight and search for "Terminal"
    -   In your "Applications" folder, under "Utilities", open the Terminal app

-   On Linux, you can quickly open the terminal with `Ctrl + Alt + T`.

With the terminal open, run the `python --version` command to make sure you've successfully installed Python. If it
outputs `Python 3.8` or higher, you're good to go!

## Installing disnake

Now that you've installed Python and know how to open your console and run commands, you can finally install disnake!

To install the library without full voice support, you can just run the following command:

=== "Windows"

    ```
    py -3 -m pip install -U disnake
    ```

=== "macOS"

    ```
    python3 -m pip install -U disnake
    ```

=== "Linux"

    ```
    python3 -m pip install -U disnake
    ```

Otherwise to get voice support you should run the following command:

=== "Windows"

    ```
    py -3 -m pip install -U "disnake[voice]"
    ```

=== "macOS"

    ```
    python3 -m pip install -U "disnake[voice]"
    ```

=== "Linux"

    ```
    python3 -m pip install -U "disnake[voice]"
    ```

To install the development version, do the following:

```
$ git clone https://github.com/DisnakeDev/disnake
$ cd disnake
$ python3 -m pip install -U .[voice]
```

!!! Info

    While installing voice on Linux, you must install the following packages via your favourite package manager (e.g. `apt`, `dnf`, etc.) before running the above commands:

    - libffi-dev (or `libffi-devel` on some systems)
    - python-dev (e.g. `python3.6-dev` for Python 3.6)

And that's it! With all the necessities installed, you're almost ready to start coding your bot.

[python]: https://www.python.org/downloads/
[brew]: https://brew.sh/
[opensource-linux]: https://opensource.com/article/20/4/install-python-linux
