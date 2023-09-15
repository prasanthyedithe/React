export default function Stats({ items }) {
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const perItemsPacked = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {perItemsPacked === 100
          ? `You got everything Ready to go ✈️`
          : `🧳 You have {numItems} items on your list, and you already packed
          ${numItemsPacked} (${perItemsPacked} %)`}
      </em>
    </footer>
  );
}
