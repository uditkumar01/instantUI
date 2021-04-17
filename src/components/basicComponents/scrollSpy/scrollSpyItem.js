export function ScrollSpyItem({ id, subTitle, activeSec, setActiveSec }) {
    return (
        <li className={activeSec === id ? "list-item active" : "list-item"}>
            <a href={"#" + id} onClick={() => setActiveSec(() => id)}>
                {subTitle}
            </a>
        </li>
    );
}