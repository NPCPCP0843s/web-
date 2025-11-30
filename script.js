fetch('data.json')
  .then(res => res.json())
  .then(projects => {
    const searchInput = document.getElementById('search');
    const results = document.getElementById('results');

    function display(filtered) {
      results.innerHTML = filtered.map(p => `
        <div class="project-card">
          <img src="${p.icon}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <span>${p.language}</span>
          <a href="${p.file}" download>ダウンロード</a>
        </div>
      `).join('');
    }

    display(projects); // 最初は全部表示

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = projects.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.language.toLowerCase().includes(query)
      );
      display(filtered);
    });
  });