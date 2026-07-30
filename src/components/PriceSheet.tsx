import type { Block, PriceSection } from "@/data/priceList";

function BlockView({ block }: { block: Block }) {
  if (block.kind === "note") {
    return (
      <div className="block note">
        <div className="amount">{block.title}</div>
        <p>{block.text}</p>
      </div>
    );
  }

  if (block.kind === "list") {
    return (
      <div className="block">
        {block.title && <h3>{block.title}</h3>}
        <div className="list">
          {block.rows.map((row) => (
            <div className="item" key={row.name}>
              <span className="name">{row.name}</span>
              <span className="price">{row.price}</span>
              {row.desc && <span className="desc">{row.desc}</span>}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "compact") {
    return (
      <div className="block">
        {block.title && <h3>{block.title}</h3>}
        <div className={`compact${block.rows.length > 5 ? " two-col" : ""}`}>
          {block.rows.map((row, i) => (
            <div className="row" key={`${row.name}-${i}`}>
              <span>{row.name}</span>
              <span className="leader" aria-hidden="true" />
              <span className="price">{row.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="block">
      {block.title && <h3>{block.title}</h3>}
      <table className="matrix">
        <thead>
          <tr>
            <th scope="col">Service</th>
            {block.columns.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              {block.columns.map((c, i) => (
                <td key={c}>{row.values[i] ?? "—"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PriceSheet({ section }: { section: PriceSection }) {
  return (
    <section className="sheet" id={section.id}>
      <h2>{section.title}</h2>
      {section.blocks.map((block, i) => (
        <BlockView block={block} key={i} />
      ))}
    </section>
  );
}
