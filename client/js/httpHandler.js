(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  const randomCommandGetter = () => {
    let command = '';
    $.get(serverUrl, (data) => command = data);
    SwimTeam.move(command);
  }
  // function get Random command
    // declare command variable
    // ajax get request with callback that assigns (data) to command variable
    // SwimTeam.move(command)


  // Goal:
    // obtain command from get request
    // assign this command to a variable in scope via callback
    // use command with SwimTeam.move(command);

    // Alternate thought:
    // obtaining command from get request
    // in the callback we use SwimTeam.move(data)


  /////////////////////////////////////////////////////////////////////
  // The ajax file uploader is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUpload(file);
  });

})();
