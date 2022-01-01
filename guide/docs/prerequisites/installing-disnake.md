# Installing disnake

:::note

To use disnake, you'll need to install [Python][python]. Like most other [`discord.py`](https://discordpy.readthedocs.io/en/latest) forks, disnake supports Python 3.8 or higher. For a full walkthrough on installing Python, we suggest following [this Real Python article](https://realpython.com/installing-python/), or [The Hitchhiker’s Guide to Python](https://docs.python-guide.org/starting/installation/).

:::

To use disnake, you'll need to install it via `pip`, which is Python's standard package manager. Since pip comes
standard with Python 3.4 and above, there is no need to separately install it.

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
$ pip install -U git+https://github.com/DisnakeDev/disnake#egg=disnake[speed,voice]
```

:::info

While installing voice on Linux, you must install the following packages via your favourite package manager (e.g. `apt`, `dnf`, etc.) before running the above commands:

- libffi-dev (or `libffi-devel` on some systems)
- python-dev (e.g. `python3.6-dev` for Python 3.6)

:::

And that's it! With all the necessities installed, you're almost ready to start coding your bot.

[python]: https://www.python.org/downloads/
[brew]: https://brew.sh/
[opensource-linux]: https://opensource.com/article/20/4/install-python-linux
