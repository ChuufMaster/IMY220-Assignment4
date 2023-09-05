$(() => {
  $("#left").on("click", (event) => {
    addMessage("left");
  });

  $("#right").on("click", (event) => {
    addMessage("right");
  });

  function addMessage(side) {
    let text = $("#message").val();
    var regex =
      /(?<=(?:(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/\S*(?:watch\/|embed\/))))(.*)|(\w+)$/gim;
    let match;
    let output = "";
    while ((match = regex.exec(text)) !== null) {
      if (match[2] !== undefined) {
        output += match[2];
      } else if (match[1] !== undefined) {
        output +=
          '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
          match[1] +
          '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
      }
    }

    let message = $(
      '<div class="col-4 offset-4 rounded mb-3 ' +
        side +
        '">' +
        output +
        "</div>",
      { html: "End" }
    );
    message.appendTo(".messages");
  }
});
