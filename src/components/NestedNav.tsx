// import "./NestedNav.js";
import "bootstrap/dist/css/bootstrap.css";

function NestedNav() {
  // document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach((el) => {
  //   el.addEventListener("shown.bs.tab", () => {
  //     const target = el.getAttribute("data-bs-target");
  //     const scrollElem = document.querySelector(
  //       `${target} [data-bs-spy="scroll"]`
  //     );
  //     bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh();
  //   });
  // });
  return (
    <>
      {/* <div id="" style={{ display: "flex" }}>
        <div className="col-4">
          <div
            id="list-example"
            className="list-group"
            style={{ position: "sticky" }}
          >
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>

        <div
          className="col-8"
          style={{
            height: "500px",
            overflowY: "scroll",
            padding: "0px 0px 0px 30px ",
            width: "740px",
          }}
        >
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, debitis voluptas! Inventore dolorum unde sint tempore
              culpa. Dolore, quos dolor. Fugiat officia fuga, praesentium ipsam
              corporis doloremque eveniet perspiciatis eaque. ipsum dolor, sit
              amet consectetur adipisicing elit. Dolorem ratione provident
              laborum illo id libero ab a eligendi cumque beatae!. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis, debitis
              voluptas! Inventore dolorum unde sint tempore culpa. Dolore, quos
              dolor. Fugiat officia fuga, praesentium ipsam corporis doloremque
              eveniet perspiciatis eaque. ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorem ratione provident laborum illo id libero
              ab a eligendi cumque beatae!.
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, debitis voluptas! Inventore dolorum unde sint tempore
              culpa. Dolore, quos dolor. Fugiat officia fuga, praesentium ipsam
              corporis doloremque eveniet perspiciatis eaque. ipsum dolor, sit
              amet consectetur adipisicing elit. Dolorem ratione provident
              laborum illo id libero ab a eligendi cumque beatae! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis, debitis
              voluptas! Inventore dolorum unde sint tempore culpa. Dolore, quos
              dolor. Fugiat officia fuga, praesentium ipsam corporis doloremque
              eveniet perspiciatis eaque. ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorem ratione provident laborum illo id libero
              ab a eligendi cumque beatae!..
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, debitis voluptas! Inventore dolorum unde sint tempore
              culpa. Dolore, quos dolor. Fugiat officia fuga, praesentium ipsam
              corporis doloremque eveniet perspiciatis eaque. ipsum dolor, sit
              amet consectetur adipisicing elit. Dolorem ratione provident
              laborum illo id libero ab a eligendi cumque beatae! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis, debitis
              voluptas! Inventore dolorum unde sint tempore culpa. Dolore, quos
              dolor. Fugiat officia fuga, praesentium ipsam corporis doloremque
              eveniet perspiciatis eaque. ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorem ratione provident laborum illo id libero
              ab a eligendi cumque beatae!..
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, debitis voluptas! Inventore dolorum unde sint tempore
              culpa. Dolore, quos dolor. Fugiat officia fuga, praesentium ipsam
              corporis doloremque eveniet perspiciatis eaque. ipsum dolor, sit
              amet consectetur adipisicing elit. Dolorem ratione provident
              laborum illo id libero ab a eligendi cumque beatae! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis, debitis
              voluptas! Inventore dolorum unde sint tempore culpa. Dolore, quos
              dolor. Fugiat officia fuga, praesentium ipsam corporis doloremque
              eveniet perspiciatis eaque. ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorem ratione provident laborum illo id libero
              ab a eligendi cumque beatae!..
            </p>
          </div>
        </div>
      </div> position: "relative", top: "40px"*/}
      <div
        className="row"
        style={{ display: "flex", position: "relative" }}
        data-bs-spy="scroll"
        data-bs-target="#list-example"
      >
        <div className="col-4" style={{ paddingTop: "40px" }}>
          <div id="list-example" className="list-group">
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-1"
            >
              Item 1
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-2"
            >
              Item 2
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-3"
            >
              Item 3
            </a>
            <a
              className="list-group-item list-group-item-action"
              href="#list-item-4"
            >
              Item 4
            </a>
          </div>
        </div>

        {/* position: "relative",
            top: "40px", */}
        <div className="col-8" style={{ paddingTop: "40px" }}>
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex={0}
            style={{
              height: "405px",
              overflowY: "scroll",
            }}
          >
            <h4 id="list-item-1">Item 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptates aliquam rerum in assumenda ullam sequi praesentium
              labore iusto nihil, nostrum architecto accusamus aut aliquid
              reiciendis fuga officiis blanditiis. Quasi quis voluptatem, vero
              magni illo odit itaque. Eum aspernatur veniam necessitatibus
              repellendus dolorem similique aut, in tenetur reiciendis ipsum
              animi architecto, pariatur harum ratione ullam id sit nesciunt rem
              sequi repellat iure inventore iste beatae. Minima, fugiat non? Ea
              eum quasi necessitatibus dolor sit numquam nisi aut, hic corporis
              id laudantium perferendis facere itaque dicta voluptatem maiores
              repellat ipsum perspiciatis autem cumque. Nostrum aperiam labore
              eligendi reiciendis laudantium dicta saepe.
            </p>
            <h4 id="list-item-2">Item 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              nesciunt, magni ipsa ipsam praesentium accusantium neque vel
              ducimus recusandae, incidunt accusamus quibusdam temporibus eum
              exercitationem, dolore deserunt! Numquam, qui officia repudiandae
              nemo molestias hic similique sapiente. Dolorem, tempora sed?
              Mollitia, iusto adipisci. Ut, illum itaque deserunt veniam id unde
              natus nesciunt non et delectus veritatis qui consectetur aut eaque
              maiores placeat sunt nemo numquam, dignissimos voluptatum vel sit
              minima! Accusamus iusto dolores in fugiat tenetur ipsam quibusdam
              consequatur iste. Sint praesentium ducimus cupiditate laudantium
              ipsa harum commodi beatae neque soluta unde illum non ipsum nisi,
              dolore, asperiores corporis magnam error.
            </p>
            <h4 id="list-item-3">Item 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              quos delectus officia dolores eum minus beatae nemo numquam
              laudantium, nobis optio autem provident reiciendis dignissimos,
              cumque repellat, similique perferendis a neque aspernatur.
              Excepturi sed, commodi recusandae magni tempore alias aspernatur
              similique libero. Iusto et maxime aliquid eveniet autem iste eum
              rerum explicabo laudantium cumque? Ut eius libero accusantium
              nisi, accusamus quibusdam repellat corrupti blanditiis, porro
              itaque deserunt amet assumenda tenetur, mollitia eos sunt numquam
              odio corporis? Sed deserunt rerum obcaecati rem. Modi facere
              cumque facilis nostrum repellat veritatis sapiente. Perspiciatis
              accusantium explicabo provident fugit corrupti. Praesentium eius
              eaque deleniti! Culpa.
            </p>
            <h4 id="list-item-4">Item 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              praesentium reprehenderit quas ducimus quidem delectus fuga
              sapiente quam iure, numquam perferendis possimus eum soluta
              aspernatur totam accusamus recusandae debitis veritatis minus
              aliquid velit repellendus? Eos numquam doloremque recusandae ad,
              esse facilis. Excepturi rem asperiores dolorum tempore consectetur
              odit hic, eveniet temporibus numquam, dolores laboriosam
              explicabo. Pariatur ad culpa nulla ipsum nemo maiores
              necessitatibus doloremque quae voluptatum minima. Quas deserunt
              maxime nulla unde, vel non. Illo fugiat vitae tempora non quisquam
              dolor officiis iusto atque officia, reprehenderit quia delectus
              blanditiis deleniti cumque omnis voluptatibus animi nihil
              obcaecati mollitia distinctio harum ipsa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NestedNav;
