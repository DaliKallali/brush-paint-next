import styles from "./page.module.css";
import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brush paint</title>
        <link rel="icon" type="image/png" href="ed-dev-favicon.png" />
        {/*  <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        /> */}
      </Head>
      {/* Tool Bar */}
      <div className={styles.topBar}>
        {/* Active Tool */}
        <div className={styles.activeTool}>
          <span id="active-tool" title="Active Tool">
            Brush
          </span>
        </div>
        {/* Brush */}
        <div className={styles.brush}>
          <i
            className={`fas fa-brush ${styles.icon}`}
            id="brush"
            title="Brush"
          />
          <input
            // defaultValue={0o0}
            value="000000"
            data-jscolor="{
      preset: 'dark',
      closeButton: true,
      closeText: 'OK'
      }"
            className={styles.jscolor}
            id="brush-color"
          />
          <span className={styles.size} id="brush-size" title="Brush Size">
            10
          </span>
          <input
            type="range"
            min={1}
            max={50}
            defaultValue={10}
            className={styles.slider}
            id="brush-slider"
          />
        </div>
        {/* Bucket */}
        <div className={styles.bucketTool}>
          <i
            className={`fas fa-fill-drip ${styles.icon}`}
            title="Background Color"
          />
          <input
            defaultValue="ffffff"
            data-jscolor="{
    preset: 'dark',
    closeButton: true,
    closeText: 'OK'
    }"
            className={styles.jscolor}
            id="bucket-color"
          />
        </div>
        {/* Eraser */}
        <div className={styles.tool}>
          <i
            className={`fas fa-eraser ${styles.icon}`}
            id="eraser"
            title="Eraser"
          />
        </div>
        {/* Clear Canvas */}
        <div className={styles.tool}>
          <i
            className={`fas fa-undo-alt ${styles.icon}`}
            id="clear-canvas"
            title="Clear"
          />
        </div>
        {/* Save Local Storage */}
        <div className={styles.tool}>
          <i
            className={`fas fa-download ${styles.icon}`}
            id="save-storage"
            title="Save Local Storage"
          />
        </div>
        {/* Load Local Storage */}
        <div className={styles.tool}>
          <i
            className={`fas fa-upload ${styles.icon}`}
            // className={styles["fas"] + " " + styles["fa-upload"]}
            id="load-storage"
            title="Load Local Storage"
          />
        </div>
        {/* Clear Local Storage */}
        <div className={styles.tool}>
          <i
            // className="fas fa-trash-alt"
            className={`fas fa-trash-alt ${styles.icon}`}
            id="clear-storage"
            title="Clear Local Storage"
          />
        </div>
        {/* Download Image */}
        <div className={styles.tool}>
          <a id="download">
            <i
              className={`far fa-save ${styles.icon}`}
              title="Save Image File"
            />
          </a>
        </div>
      </div>
      {/* Message for mobile */}
      {/* <div className="mobileMessage">
        <h2>Please use the app on a larger screen</h2>{" "}
      </div> */}
      {/* <Script src="/js/jscolor.js"></Script>
      <Script src="/js/script.js"></Script> */}
    </>
  );
}
