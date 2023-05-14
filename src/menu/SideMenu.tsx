export function SideMenu() {
  return (
    <div id="side-menu">
      <section>M2</section>
      <section id="section-email">
        <form action="" method="get">
          <h2>Contact me</h2>
          <div>
            <label htmlFor="userName">Name</label>
            <input type="text" name="Name" id="userName" required />
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input type="email" name="email" id="userEmail" placeholder="example@me.com" required />
          </div>
          <div>
            <textarea name="message" placeholder="Enter message here..."></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}
