import Modal from '../../../components/commons/Modal';

const MutoModal = () => {
    return <Modal>
    <div>
      <h1>武藤先生のブログ</h1>
      <nav>
        <ul>
          <li><a href="#what">武藤先生 is 何</a></li>
          <li><a href="#like">好きな言語</a></li>
        </ul>
      </nav>
      <img src="https://media.discordapp.net/attachments/857174166276276245/965982892993966120/mutou-removebg-preview.png" alt="武藤先生" />
      <section id="what">
        <h1>武藤先生 is 何</h1>
        <p>学生時代にコンパイラを作った最強の教師</p>
        <p>最近は、髪が...</p>
      </section>
      <section id="like">
        <h1>好きな言語</h1>
        <p>好きな言語は、以下の通り</p>
        <ul>
          <li>PHP</li>
          <li>JQuery</li>
          <li>Node.js</li>
        </ul>
      </section>
    </div>
  </Modal>
}

export default MutoModal;