const component = (tag, attr) => {
  let b = document.createElement(tag);

  if (attr) {
    for (const [key, value] of Object.entries(attr)) {
      switch (key) {
        case "children":
          for (const child of value)
            b.appendChild(child);
          continue;

        case "style":
          for (const [property, css] of Object.entries(value))
            b[key][property] = css;
          continue;

        case "classList":
          for (const _class of value)
            b[key].add(_class);
          continue;

        case "attributes":
          for (const [name,] of Object.entries(value))
            b.setAttribute(name, value);
          continue;
      }

      b[key] = value;
    }
  }

  return b;
};
