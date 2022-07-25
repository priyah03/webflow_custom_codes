/* Step 1 -
Select an element you want to truncate (may it be div, paragraph, text block). Give it a Class or a Combo class ‘target’.

Step 2 -
Go to > page settings > copy and paste the below code before the body tag as it is. You can modify the number of characters where it currently has ‘20’. */

<script>
document.addEventListener("DOMContentLoaded", () => {
  const maxCharacters = 20, // whatever max charachter you like to display
    targets = document.getElementsByClassName("target");

  Array.from(targets).forEach((target) => {
    const text = target.textContent,
      truncate = text.substring(0, maxCharacters);
    target.textContent = `${truncate}...`;
  });
});
</script>
