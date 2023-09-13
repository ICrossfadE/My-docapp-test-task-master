export function renderForm(array, constructor, htmElement) {
  array.forEach((item) => {
    new constructor(
      item.id,
      item.code,
      item.title,
      item.short_title,
      htmElement
    ).render();
  });
}
