const d = document,
  ua = navigator.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safarai: () => ua.match(/safarai/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safarai() ||
          this.firefox() ||
          this.opera()
        );
      },
    };
  $id.innerHTML = `
	<ul>
		<li>User agent: <b>${ua}</b></li>
		<li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
		<li>Navegador: <b>${isBrowser.any()}</b></li>
	</ul>
	`;
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p>Este contenido es exclusivo de ${isBrowser.chrome()}</p>`;
  }
  if (isMobile.android()) {
    window.location.href = 'https://www.google.com';
  }
}
