class Changelog {
  constructor(id, title, defines) {
    this.title = title
    
    this.template = `
      <h1 id="changelogTitle"></h1>
      <diV id="changelogContent"></div>
    `
    
    document.getElementById(id).innerHTML = this.template
    document.getElementById("changelogTitle").innerText = this.title
    document.getElementById("changelogContent").innerHTML = changelog
  }
}
