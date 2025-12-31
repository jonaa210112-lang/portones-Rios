document.getElementById("formProforma").addEventListener("submit", function(e){
  e.preventDefault();

  const ancho = Number(document.getElementById("ancho").value);
  const alto = Number(document.getElementById("alto").value);
  const tipo = document.getElementById("tipo").value;

  let precioBase = tipo === "industrial" ? 180 : 120;

  const total = (ancho * alto) * precioBase;

  document.getElementById("resultado").innerText =
    "Precio estimado: ₡ " + total.toLocaleString() + " (No incluye motor)";
});
