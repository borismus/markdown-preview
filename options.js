// Saves options to chrome.storage.sync.
document.getElementById('theme').addEventListener('change', function() {

  var theme = document.getElementById('theme').value;
  chrome.storage.sync.set({
    currentTheme: theme,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.color = "green";
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
});

function restore_options() {
  // Use default value theme = 'original'
  chrome.storage.sync.get({
    currentTheme: 'originalTheme',
  }, function(items) {
    document.getElementById('theme').value = items.currentTheme;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
