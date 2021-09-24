<pre align="center">
█▀▀ █ ▀█▀ █░█ █░█ █▄▄   █▀▄ ▄▀█ █▀█ █▄▀
█▄█ █ ░█░ █▀█ █▄█ █▄█   █▄▀ █▀█ █▀▄ █░█
</pre>
🌙 A simple plug-and-play Chroma theme based on GitHub's Dark color scheme!

Feel free to open a Issue/PR for improvements!

# Installation 🛠️
- Head over to the Releases page, and download the lastest `highlight.css` release.
- Turn `makrup.highlight.noClasses` to `false` in your Hugo config.
- Then simply include the downloaded stylesheet in your head partial to make it available on all pages.

OR

- Clone the repo.
- Install the dependencies.
- Run `npm run build`. It will output `highlight.css` in the current directory.

Note: Anyone is welcome to port it directly into Chroma! I am not yet proficient with Go to open a PR with a theme that automatically updates with Primer styles.

# CSS Reference 📙
To create a sample reference stylesheet, run:
```
hugo gen chromastyles --style=monokai > sample.css
```

# Credits ⭐
- [Primer Team & Contributors](https://primer.style/)
- [JSS Project](https://github.com/cssinjs/jss)
