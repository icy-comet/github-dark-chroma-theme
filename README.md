<pre align="center">
█▀▀ █ ▀█▀ █░█ █░█ █▄▄   █▀▄ ▄▀█ █▀█ █▄▀
█▄█ █ ░█░ █▀█ █▄█ █▄█   █▄▀ █▀█ █▀▄ █░█
</pre>

🌙 A simple Chroma theme based on GitHub's Dark color scheme!

No more client-side JS-based highlighting for a better dark highlighting theme with Hugo!

Check it out on my site @[anikett.com](https://anikett.com)

Feel free to open a Issue/PR for improvements!

# Installation 🛠️
- Head over to the [Releases](https://github.com/cryptic-code/github-dark-chroma-theme/releases) page, and download the lastest `highlight.css.zip`.
- Turn `markup.highlight.noClasses` to `false` in your Hugo config.
- Then simply include the downloaded stylesheet in your layouts like a `head` partial to make it available on all pages.

OR

- Clone the repo.
- Install the dependencies.
- Run `npm run build`. It will output `highlight.css` in the current directory.
- Follow the rest of the above instructions.

Note: Anyone is welcome to port it directly into Chroma! I am not yet proficient with Go to open a PR with a theme that automatically updates with Primer styles.

# CSS Reference 📙
To create a sample reference stylesheet, run:
```
hugo gen chromastyles --style=monokai > sample.css
```

# Credits ⭐
- [Primer Team & Contributors](https://primer.style/)
- [JSS Project](https://github.com/cssinjs/jss)
