import Card from "../components/Card";
export default function Page() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        display: "flex",
      }}
    >
      <div className="img-container">
        <img
          src="\thirsty\FILÈ FUN !   (LEAVE AM FOR $TRAFF! E TOO $ABI) .  - @USAD.JPEG (5).jpg"
          alt=""
        />
        <div className="text-container">
          <h2>straffitti</h2>
          <ul>
            <li>
              STRAFFITTI, the multifaceted artist, and creative director of
              Thirstyworldwide, a renowned creative collective established a
              decade ago with a significant presence worldwide. His journey
              commenced with the groundbreaking debut project '' in 2018, an
              explosive testament to his genre-defying creativity. Following up
              with which features a variety of artists, from he soared to the
              No. 1 spot on the charts, solidifying his status as a
              chart-topping artist. STRAFFITTI's music, like his brands, is a
              fusion of cultures and influences, inviting all to embrace a bold,
              innovative, and unapologetic worldview.
            </li>
          </ul>
        </div>
      </div>
      <div className="videos-container">
        <div className="logo-container">
          <p>forever thirsty</p>
          <img src="\thirsty\wearthirsty.webp" alt="" />
        </div>
        <div className="grid-container">
          <Card
            img="\thirsty\FILÈ FUN !   (LEAVE AM FOR $TRAFF! E TOO $ABI) .  - @USAD.JPEG (5).jpg"
            header="thirsty"
            text="this is thirsty"
          />
          <Card
            img="\thirsty\FILÈ FUN !   (LEAVE AM FOR $TRAFF! E TOO $ABI) .  - @USAD.JPEG (7).jpg"
            header="thirsty"
            text="this is thirsty"
          />
          <Card
            img="\thirsty\FILÈ FUN !   (LEAVE AM FOR $TRAFF! E TOO $ABI) .  - @USAD.JPEG (3).jpg"
            header="thirsty"
            text="this is thirsty"
          />
          <Card
            img="\thirsty\FILÈ FUN !   (LEAVE AM FOR $TRAFF! E TOO $ABI) .  - @USAD.JPEG (2).jpg"
            header="thirsty"
            text="this is thirsty"
          />
        </div>
      </div>
    </div>
  );
}
