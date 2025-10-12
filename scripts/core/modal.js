export function openDialog(dialog, overlay){
  dialog.style.display = ''; overlay.style.display = '';
  dialog.hidden = false; overlay.hidden = false;
}
export function closeDialog(dialog, overlay){
  dialog.style.display = 'none';
  overlay.style.display = 'none';
  dialog.hidden = true; overlay.hidden = true;
}