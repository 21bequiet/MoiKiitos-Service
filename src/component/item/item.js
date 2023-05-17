const AppItem = ({ item }) => {
  return (
    <>
      {/* <div className='app-item'>
        <div className='app-item-user'>Tom</div>
        <article>Use the on-page list variant when placing the list on the general page of a user interface. On-page lists typically appear in smaller spaces, like in a card or sidebars. The on-page list styling has no visible background header with fixed information. If there are scrolling capabilities, the header will remain sticky and have a background layer to differentiate it from the list item rows scrolling beneath it.</article>
      </div>

      <div className='app-item app-item-reverse'>
        <div className='app-post-item-user'>Jack</div>
        <article>Use the on-page list variant when placing the list on the general page of a user interface. On-page lists typically appear in smaller spaces, like in a card or sidebars. The on-page list styling has no visible background header with fixed information. If there are scrolling capabilities, the header will remain sticky and have a background layer to differentiate it from the list item rows scrolling beneath it.</article>
      </div>

      <div className='app-item'>
        <div className='app-item-user'>Lucy</div>
        <article>Use the on-page list variant when placing the list on the general page of a user interface. On-page lists typically appear in smaller spaces, like in a card or sidebars. The on-page list styling has no visible background header with fixed information. If there are scrolling capabilities, the header will remain sticky and have a background layer to differentiate it from the list item rows scrolling beneath it.</article>
      </div>

      <div className='app-item'>
        <div className='app-item-user'>John</div>
        <article>Use the on-page list variant when placing the list on the general page of a user interface. On-page lists typically appear in smaller spaces, like in a card or sidebars. The on-page list styling has no visible background header with fixed information. If there are scrolling capabilities, the header will remain sticky and have a background layer to differentiate it from the list item rows scrolling beneath it.</article>
      </div> */}
      <div className='app-item'>
        <div className='app-item-user'>{item.user}</div>
        <article>{item.content}</article>
      </div>
    </>
  )
};

export default AppItem;