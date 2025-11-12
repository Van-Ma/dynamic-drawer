import { useState } from "react";
import "./DynamicDrawer.scss";

function DynamicDrawer() {
    const [openPreview, setOpenPreview] = useState(false);
    const [layout, setLayout] = useState("top");

    // toggle layout preview selection
    const togglePreview = () => setOpenPreview(prev => !prev);

    // set layout style
    const handleLayoutSelection = (dir) => setLayout(dir);

    return (
        <div className="app-page">
            {/* navigation bar */}
            <nav className={`nav-bar layout-${layout}`}>
                {/*preview button*/}
                <button
                    id="preview-btn"
                    className={openPreview ? "open" : ""}
                    onClick={togglePreview}
                >
                    <img src="drawer/layout.png" alt="layout" />
                </button>

            </nav>

            {/* layout preview  */}
            <div className={`layout-previews layout-${layout} ${openPreview ? "open" : ""}`}>
                {/* layout preview buttons */}
                {["top", "left", "right", "bottom"].map((dir) => (
                    <button key={dir} onClick={() => handleLayoutSelection(dir)}>
                        <img src={`drawer/${dir}.png`} alt={dir} />
                    </button>
                ))}
            </div>

        </div>
    );
}

export default DynamicDrawer;
