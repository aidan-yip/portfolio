// copyright © Aidan Yip, all rights reserved.

function Page_Not_Found() {
  return (
    <section className="section not_found_background">
      <img src="/images/imac_404.png" alt="404" style={{ width: "500px" }} />
      <h2 className="work_title">404</h2>
      <p className="work_info">Whoops, that doesn't exist!</p>
    </section>
  );
}

export default Page_Not_Found;
