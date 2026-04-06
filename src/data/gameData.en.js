export const gameDataEn = {
  meta: {
    version: "1.0",
    language: "en",
    title: "Early Christianity Simulator",
    subtitle: "How the Trinity Became Orthodox",
    defaultLanguage: "en",
  },

  startNodeId: "intro",

  nodes: {
    intro: {
      id: "intro",
      type: "scene",
      title: "Game Introduction",
      text: [
        "This game is set within the development of Christianity from the 1st to the 4th century. Through branching choices, it simulates how different theological positions emerged and led to distinct historical outcomes.",
        "You take the role of an ordinary person within this world, making decisions under limited knowledge—each corresponding to a real historical trajectory.",
        "The game does not judge which position is “correct,” but presents the diversity of competing interpretations within early Christianity. What later became “orthodoxy” was not given from the beginning, but emerged through historical processes.",
        "You are encouraged to explore multiple paths to better understand the reasoning and differences behind each position.",
      ],
      choices: [
        {
          id: "start",
          label: "Begin",
          nextId: "prologue",
        },
      ],
    },

    prologue: {
      id: "prologue",
      type: "scene",
      title: "Prologue",
      text: [
        "In the first century BCE, the Mediterranean world had largely been unified under the Roman Empire. Its order extended even to a small land on the eastern edge—Judea. Here, people called themselves the “people of Israel.” They did not define themselves by city or language, but by a shared faith and historical identity. They upheld strict monotheism, believing there was only one God—often called Yahweh—the creator of the universe and the ruler of history. He had made a covenant with their ancestor Abraham, promising descendants and land. Because of this, they saw themselves as a chosen people, a community bound to God in a unique relationship.",
        "The Law that formed around this belief became the core of their society and identity. It governed not only worship but everyday life: circumcision marked entry into the covenant, the Sabbath structured time, and dietary laws maintained boundaries in daily behavior. These practices were both obedience to God and a constant reaffirmation of “who we are,” especially under foreign rule, where they helped preserve the community’s boundaries.",
        "Yet tension continued to grow between belief and reality. Roman rule brought order, but also oppression and submission. The ancient promises were still recited, yet seemed unfulfilled. In this situation, a strong expectation of the end times began to form—many believed that God would soon intervene in history, end injustice, restore order, and save Israel. Within this expectation, the idea of the “Messiah” became increasingly important. Originally meaning “anointed one,” it now came to represent a figure who would bring salvation and renewal, restoring the world to what it should be.",
        "Thus, in first-century Judea, everything appeared to continue as before, yet beneath the surface the balance was unstable. The Law still guided life, the covenant was still believed, but the longing for change grew stronger, and the imagination of the future became more urgent. It was in this setting that new voices were about to appear, retelling this ancient story in different ways.",
      ],
      choices: [
        {
          id: "continue",
          label: "Continue",
          nextId: "jesus_appears",
        },
      ],
    },

    jesus_appears: {
      id: "jesus_appears",
      type: "scene",
      title: "A New Voice Appears",
      text: [
        "In the first century CE, as tensions between Rome and the Jewish people grow increasingly strained, there appears an apocalyptic prophet—Jesus. He moves among villages, marketplaces, and the countryside, proclaiming to the people that the end is about to come: “The kingdom of God is near. Repent.” He declares war, disaster, and the destruction of the world, which are not events of a distant future, but of the present—an imminent end that this very generation will witness. ",
        "He criticizes some religious authorities for their hypocrisy and inconsistency, warning the people to repent and emphasizing that true righteousness comes from inner moral intention. As a prophet within Judaism, he acknowledges the authority of the Mosaic Law, but offers a more radical interpretation of it. The Law commands people to love their neighbor; generally, this is understood as loving one’s own people while hating one’s enemies. But he goes further, calling people to love even their enemies. This is not a rejection of the Law, but a pushing of its moral demands to an extreme.",
        "At the same time, stories about him spread rapidly. Some say he performs miracles—healing diseases, giving sight to the blind, enabling the lame to walk. Some say he casts out unclean spirits, restoring people to clarity of mind. There are even those who quietly speak of him raising the dead. These stories spread from village to village, repeated again and again, and gradually amplified. Over time, a bolder claim begins to emerge: perhaps this man is the one long awaited—the Messiah.",
      ],
      choices: [
        {
          id: "continue",
          label: "Continue",
          nextId: "your_situation",
        },
      ],
    },

    your_situation: {
      id: "your_situation",
      type: "scene",
      title: "Your Situation",
      text: [
        "You are an ordinary person in this society, a farmer working the land. Life is not easy—your harvest depends on weather and taxation, and you must labor constantly to survive. Yet you are devout. You believe in Yahweh and trust that He will eventually save His people and restore justice.",
        "When you hear about Jesus, you feel both hope and unease. Some of your neighbors are deeply moved by his message. They sell their belongings, leave their homes, and choose to follow him, hoping to witness God’s work with their own eyes. At the same time, the religious leaders in your community warn you that this man is dangerous, that he misleads people, and that you should not be deceived by false miracles and words.",
        "You stand at the edge of your own life, facing a difficult decision. On one side is the life you know—your land, your family, and the existing order. On the other is an uncertain path, filled with hope, risk, and the promise of something that could change everything.",
      ],
      choices: [
        {
          id: "stay",
          label: "Stay in your current life",
          nextId: "stay_ending",
        },
        {
          id: "follow",
          label: "Follow Jesus",
          nextId: "follow_jesus",
        },
      ],
    },

    stay_ending: {
      id: "stay_ending",
      type: "ending",
      title: "If You Stay",
      text: [
        "You choose to remain in your current life, following the advice of your community’s religious leaders. You continue tending your land, observing the Law you are familiar with, and maintaining the existing order. At first, stories about Jesus continue to circulate, but they gradually fade from your daily life.",
        "Yet a few years later, new reports begin to reach you. Those who once followed him have not scattered; instead, they have gathered into communities and continue spreading his teachings. What they proclaim now is no longer only about repentance and the kingdom of God—they claim that Jesus, after being executed, has risen from the dead, and has been given an unprecedented status.",
        "Their faith grows stronger, even taking on an exclusive character, and they begin redefining the boundaries of their community. You gradually realize that their path has clearly diverged from the tradition you understand. Their attitude toward the Law has changed, their understanding of who belongs has shifted, and they even begin accepting those who were once outside your people.",
        "In your eyes, this is no longer just an internal disagreement, but a new path separating itself from the old. You remain within the tradition, while they move in another direction.",
      ],
      ending: {
        key: "judaism_locked",
        label: "Sticking to Judaism",
      },
      choices: [],
    },

    follow_jesus: {
      id: "follow_jesus",
      type: "scene",
      title: "If You Follow Jesus",
      text: [
        "You choose to follow Jesus, leaving behind your familiar life and stepping onto an unknown path with the hope that he is the Messiah.",
        "But what happens shocks you. This man, in whom you placed such hope, angers the religious authorities and is ultimately condemned to death by the Roman government. You had expected the Messiah to lead resistance against Rome, to restore the kingdom of Israel, or for God to intervene directly and bring justice and peace. None of this happens.",
        "You witness Jesus being crucified, dying in humiliation amid mockery and indifference. Even his closest followers deny him to protect themselves. The group that once gathered around him quickly scatters, and authorities begin hunting those who still believe in him.",
        "Your heart is torn apart by disappointment. Your hope collapses. You begin to wonder if you were deceived, and regret not listening to the warnings.",
        "Then, in this moment of confusion and despair, you hear a man preaching. His name is Paul. He tells you that Jesus has risen from the dead—not only appearing to many apostles, but also revealing himself to Paul in a vision. He explains that Jesus’ death was not a failure, but part of God’s plan, that he died to bear the sins of humanity. His resurrection proves that he has conquered death and has been exalted as Lord.",
        "Paul tells you that if you continue to believe in Jesus, your sins will be forgiven, and you too will enter eternal life in the end.",
        "You are both astonished and hesitant. This message rekindles hope, yet deepens your confusion. Standing between doubt and trust, you must decide once again:",
      ],
      choices: [
        {
          id: "reject_paul",
          label: "Reject Paul",
          nextId: "reject_paul_ending",
        },
        {
          id: "believe_paul",
          label: "Believe Paul",
          nextId: "believe_paul",
        },
      ],
    },

    reject_paul_ending: {
      id: "reject_paul_ending",
      type: "ending",
      title: "If You Reject Paul",
      text: [
        "You choose not to believe Paul. You cannot accept that someone who was executed could be called the Messiah, nor can you understand the idea that “death itself is salvation.” Your expectations have already been shattered, and this new explanation feels like an attempt to justify failure.",
        "You decide to stop following these people and return to your former life. You take up once again the faith and Law you have always known, continuing to revere Yahweh and waiting for Him to fulfill His promises in a way you can understand.",
        "In your eyes, those who still believe in Jesus have gone down a different path. You remain in the tradition, holding on to what you believe is true and stable.",
      ],
      ending: {
        key: "return_to_tradition",
        label: "Return to Tradition",
      },
      choices: [],
    },

    believe_paul: {
      id: "believe_paul",
      type: "scene",
      title: "If You Believe Paul",
      text: [
        "You choose to believe Paul. Gradually, you come to accept a new understanding: the Jesus who was crucified was not a failed Messiah, but the very savior promised by God, and his death itself was part of that salvation.",
        "This message strikes you like a sudden light. If it is true, then God has already intervened in history, redemption has already happened, and all that remains is to believe and accept it. This is called the “Gospel”—the good news that salvation has already been accomplished.",
        "You return to your hometown and share this message with your family and neighbors. Some doubt, some reject it, but others are moved and choose to believe alongside you. You begin to gather regularly, usually on the first day of the week—the day you believe Jesus rose from the dead. You pray together, encourage one another, and break bread and share wine in remembrance of his death and resurrection.",
        "Through this, a new identity begins to take shape. Since “Messiah” is translated into Greek as “Christ,” you begin to call yourselves “Christians”—followers of Christ.",
      ],
      choices: [
        {
          id: "continue",
          label: "Continue",
          nextId: "law_question",
        },
      ],
    },

    law_question: {
      id: "law_question",
      type: "scene",
      title: "The Question of the Law",
      text: [
        "As your community grows, a new and unprecedented question begins to emerge. Among you are both Jews and Gentiles. You all believe that Jesus has brought salvation, but a fundamental disagreement arises:",
        "If Christ has already come, is the Law of Moses still necessary?",
        "Some insist that the Law is God’s eternal covenant and cannot be abolished. Others argue that if salvation still depends on the Law, then what is the meaning of Christ’s redemption?",
        "The debate becomes increasingly intense, and you begin to realize that this is not a simple right-or-wrong issue, but a spectrum of positions:",
        "Some believe a new age has come, and the Law is no longer binding for anyone.",
        "Some continue to observe the Law as part of their identity and devotion, but do not require others to do so.",
        "Some argue that Jews should keep the Law, but Gentiles are not required to.",
        "Others insist that the Law remains fully binding for everyone—anyone who follows the Messiah must accept it, including circumcision and dietary rules.",
      ],
      choices: [
        {
          id: "law_1",
          label: "The Law is no longer required for salvation.",
          nextId: "law_choice_1",
        },
        {
          id: "law_2",
          label: "You continue to observe the Law, but do not require others to do the same.",
          nextId: "law_choice_2",
        },
        {
          id: "law_3",
          label: "Jews should keep the Law, but Gentiles do not have to.",
          nextId: "nazarenes_ending",
        },
        {
          id: "law_4",
          label: "Anyone who follows the Messiah must keep the Law fully.",
          nextId: "ebionites_ending",
        },
      ],
    },

    law_choice_1: {
      id: "law_choice_1",
      type: "scene",
      title: "A New Boundary Takes Shape",
      text: [
        "You choose not to treat the Jewish Law as a requirement for salvation, embracing instead the path of “justification by faith.” Paul is the strongest advocate of this position. Within the community, some believers of Jewish background continue to observe the Law out of tradition and habit. You respect their way of life and acknowledge that it does not hinder their faith, as long as they do not impose it on others.",
        "However, not everyone shares this tolerance. Those who insist that Gentiles must also follow the Law—especially circumcision and dietary rules—begin to clash sharply with you. You believe their position undermines the foundation of Christ’s redemption, replacing faith with works. In their eyes, however, your stance is too radical, even a departure from God’s Law. You openly accuse them of distorting the Gospel, and they question your legitimacy in return.",
        "Eventually, the disagreement becomes irreconcilable. You stop associating with one another, and your paths diverge in both practice and belief.",
      ],
      choices: [
        {
          id: "continue_forward",
          label: "Continue",
          nextId: "identity_and_belief",
        },
      ],
    },

    law_choice_2: {
      id: "law_choice_2",
      type: "scene",
      title: "Faith and Practice Held Together",
      text: [
        "You choose to continue observing the Law, treating it as part of your identity and moral life, but without requiring others to do the same. This position echoes the tradition associated with James the Just, known for his piety and strict moral discipline. In your view, while strict observance of the Law is not necessary for salvation, faith alone—without a life of moral integrity—cannot truly lead to salvation either.",
        "Over time, this moderate stance gradually merges with Paul’s teaching. On the one hand, the Law is no longer a boundary for belonging; on the other, faith must still be expressed through real actions and transformed living. Yet you sense that this balance is not without tension. What is more fundamental—faith or works? Can they truly be separated? These questions have not yet erupted into open conflict, but they quietly lay the groundwork for deeper theological debates in the future.",
      ],
      choices: [
        {
          id: "continue_forward",
          label: "Continue",
          nextId: "identity_and_belief",
        },
      ],
    },

    nazarenes_ending: {
      id: "nazarenes_ending",
      type: "ending",
      title: "The Nazarenes",
      text: [
        "You choose a more balanced path. As a Jew, you continue to observe the Law, maintaining your identity within the covenant of your ancestors. But for Gentiles, you no longer require them to take on this burden. You try to hold together continuity and change, allowing this new faith to remain rooted in its origins while opening itself to a wider world.",
        "Under this approach, your group becomes relatively stable. You keep the Sabbath, follow dietary laws, read the Hebrew Scriptures, and believe that Jesus is the promised Messiah. At the same time, you also come to accept that Jesus possesses a kind of divine status, not entirely incompatible with what will later become mainstream belief.",
        "In later generations, people begin to call groups like yours the “Nazarenes.” You are neither like those who insist that everyone must keep the Law, nor like those who abandon it entirely. Instead, you preserve something closer to the earliest Jerusalem tradition.",
        "However, as time passes, the Church becomes increasingly dominated by Gentiles, and the importance of the Law gradually fades. Your position—both observing the Law and affirming Jesus—becomes harder for others to understand. Lacking strong institutional support or theological dominance, your community gradually diminishes over time.",
      ],
      ending: {
        key: "nazarenes",
        label: "Nazarenes",
      },
      choices: [],
    },

    ebionites_ending: {
      id: "ebionites_ending",
      type: "ending",
      title: "The Ebionites",
      text: [
        "You choose the strictest position: the Law of Moses remains fully valid. Whether Jew or Gentile, anyone who wishes to follow the Messiah must enter into this covenant—accepting circumcision and observing the Law. In your view, the coming of the Messiah does not abolish the Law, but confirms it.",
        "Over time, your group separates from the mainstream Church and becomes more tightly defined. In later generations, you come to be known as the “Ebionites.” You emphasize strict observance of the Law and affirm that Jesus is the Messiah chosen by God. However, you deny his full divinity. You believe he was originally human, and at some point in his life was chosen and elevated by God, rather than being eternally equal with Him. This position is often described as adoptionism.",
        "As the Church gradually develops a higher view of Christ, your beliefs become increasingly marginalized. By the fourth century, your movement fades from history, leaving only traces in the writings of others.",
      ],
      ending: {
        key: "ebionites",
        label: "Ebionites",
      },
      choices: [],
    },

    identity_and_belief: {
      id: "identity_and_belief",
      type: "scene",
      title: "Who Is the God Revealed by Jesus?",
      text: [
        "Under Paul’s leadership, you continue spreading the Gospel to Gentiles. The boundary between Jews and Gentiles gradually dissolves, and a new shared identity begins to form. You increasingly distinguish yourselves from Judaism. In your view, the age of the Law has passed; now, faith in Jesus alone brings eternal life.",
        "But what does it mean to “believe in Jesus”? You begin to realize that correctly understanding who Jesus is and what he has done may be the minimum requirement. If one believes wrongly, it could mean not salvation, but hell. In this context, what one believes becomes more important than ever before.",
        "The first question you encounter is this: Who is the God revealed by Jesus?",
        "Some insist that this God is the same Yahweh long worshiped by Israel, and that the Old Testament remains divine revelation. Jesus does not bring a new God, but reveals the deeper will of the same one. The apparent differences between judgment and mercy are simply different actions of the same God at different times.",
        "But others begin to doubt. They see a tension between the God of judgment in the Old Testament and the love and forgiveness preached by Jesus. Some propose a more radical idea: perhaps the “Father” Jesus speaks of is not Yahweh. The God who created the world and gave the Law may not be the highest God, but a lower being. Jesus, they say, comes from a higher, more perfect, and more gracious God.",
        "If this is true, then a series of fundamental questions follow: Is the Old Testament still revelation? Is Yahweh truly the highest God? Is the Father of Jesus the same as Him?",
      ],
      choices: [
        {
          id: "higher_god",
          label: "The God revealed by Jesus is not the same as the creator God of the Old Testament.",
          nextId: "two_gods_path",
        },
        {
          id: "same_god",
          label: "The God revealed by Jesus is the same Yahweh worshiped by Israel.",
          nextId: "one_god_path",
        },
      ],
    },

    two_gods_path: {
      id: "two_gods_path",
      type: "scene",
      title: "A Higher God Beyond the Creator",
      text: [
        "You gradually accept a radical view: the one revealed by Jesus is the true highest God, while the God of the Old Testament—the creator of the world and giver of the Law—is a lower being. Though powerful, he is not perfect. If this world was created by such a being, then the world itself is no longer seen as fully good, but as flawed, marked by suffering and imperfection.",
        "From this, a new problem arises. If the material world is inferior or even corrupt, how could Jesus, who comes from the highest God, truly become a human being of flesh and blood? You come to accept an explanation: Jesus was not truly human, but only appeared in human form. What seemed like a physical body was in fact a spiritual presence. This view spreads among your group and becomes known as Docetism.",
        "Yet even among those who share these assumptions, new divisions emerge. You all reject the Old Testament God as the highest, and agree that the world is flawed, and that Jesus was not truly embodied. But deeper questions divide you further: How was the world formed? And how is salvation achieved?",
        "One group develops a complex cosmology. They believe that beneath the highest God exists a hierarchy of spiritual beings, and that the world came into being through a series of falls. Human souls are trapped within matter, and salvation comes through acquiring hidden knowledge. Only by “knowing” can the soul return to the highest realm.",
        "Another group rejects this complexity, turning instead to a clearer dualism: one God is the creator—Yahweh—who made this flawed world and gave the Law; the other is the truly good and higher God revealed by Jesus. Salvation comes not through secret knowledge, but through faith in this higher God and acceptance of Jesus.",
      ],
      choices: [
        {
          id: "simple_dualism",
          label: "Truth should be clear to all, not hidden in secret knowledge.",
          nextId: "marcion_ending",
        },
        {
          id: "hidden_knowledge",
          label: "Salvation comes through deeper revelation and hidden knowledge.",
          nextId: "gnostic_ending",
        },
      ],
    },

    marcion_ending: {
      id: "marcion_ending",
      type: "ending",
      title: "Marcionism",
      text: [
        "You follow the simpler and more direct path, rejecting complex cosmologies and hidden knowledge. In your view, truth should not be reserved for a few, but clearly accessible to all who are willing to believe.",
        "You accept a stark contrast: the world was created by a lower god—Yahweh—who is harsh and flawed, while the God revealed by Jesus is entirely different—purely good, full of grace, and unrelated to this world. Jesus did not come to fulfill the Law, but to reveal this fundamental opposition and lead people away from the creator toward the true God.",
        "With this belief, you begin to reshape your tradition. You reject the Old Testament as divine revelation and begin selecting which writings to keep. Among you, Marcion becomes the most influential figure. He systematically teaches the opposition between the two gods and compiles a set of scriptures: a modified version of the Gospel of Luke as the only Gospel, along with ten edited letters of Paul, forming a unified canon. This becomes one of the earliest attempts at a “New Testament.”",
        "As his influence grows, your movement becomes known as Marcionism, separating completely from other Christian groups. However, in ongoing debates, you are condemned by those who call themselves orthodox. When Christianity later gains power within the Roman Empire, your communities are suppressed, your writings destroyed, and your tradition gradually disappears—preserved only in the writings of your opponents.",
      ],
      ending: {
        key: "marcionism",
        label: "Marcionism",
      },
      choices: [],
    },

    gnostic_ending: {
      id: "gnostic_ending",
      type: "ending",
      title: "Gnosticism",
      text: [
        "You follow a more profound and mysterious path. You are not satisfied with simple dualism, nor do you believe that faith alone is enough for salvation. In your view, the world is not only created by a lower being, but is a complex structure shaped by error and fall. Humanity does not merely live in it—it is trapped within it.",
        "You come to accept a new understanding: within you is something that does not belong to this world—a spark from the highest realm, forgotten and concealed. Jesus did not come to bear your sins, but to awaken you, to help you “remember” your true origin. What he brings is not ordinary teaching, but a hidden revelation—a knowledge that reveals the structure of reality, the hierarchy of divine beings, and the origin of the soul.",
        "Through this knowledge—gnosis—you can see through the illusion of the world, break free from material constraints, and return to the realm of light. You begin to call yourselves those who possess knowledge, and your movement becomes known as Gnosticism.",
        "You spread these teachings in different regions, forming various groups. Though diverse, you share a core vision: the world is flawed, the soul is foreign to it, and salvation comes through awakening. However, another group—calling themselves orthodox—grows stronger and labels you dangerous heretics. Over time, you lose ground.",
        "Centuries later, when Christianity becomes dominant in the Roman Empire, your communities are suppressed, your writings destroyed, and your tradition driven underground, eventually fading from history. For a long time, your ideas survive only through the writings of your opponents.",
        "Then, in the mid-20th century, a collection of texts buried in the Egyptian desert is discovered—the Nag Hammadi library. These are identified as lost Gnostic writings, and your long-silenced voice is finally heard again.",
      ],
      ending: {
        key: "gnosticism",
        label: "Gnosticism",
      },
      choices: [],
    },

    one_god_path: {
      id: "one_god_path",
      type: "scene",
      title: "Who is Jesus?",
      text: [
        "You accept the Old Testament and affirm that Yahweh is the one and only highest God. You also believe that Jesus’ death and resurrection are decisive for salvation, and you call him Lord.",
        "But a deeper question now emerges: If God is one, then who exactly is Jesus? What is his relationship to Yahweh?",
        "Some among you begin to use the concept of the Logos (Word) to understand Jesus. This idea draws from Greek philosophy, where the Logos represents the rational order of the universe, and also from Jewish tradition, where God creates and reveals through His Word. According to this view, Jesus is the Logos—he existed before his birth and participated in creation and redemption. He is divine, yet distinct from the Father.",
        "Others strongly oppose this idea. They insist on a strict understanding of monotheism: God must be absolutely one and indivisible. To say that Jesus is the Logos with divine status seems to introduce another divine being alongside Yahweh, undermining the foundation of the one true God. They seek another way to affirm Jesus’ importance without compromising God’s unity.",
      ],
      choices: [
        {
          id: "strict_monotheism",
          label: "God must remain absolutely one and indivisible.",
          nextId: "strict_monotheism_path",
        },
        {
          id: "logos",
          label: "Jesus should be understood as the Logos, the divine Word.",
          nextId: "logos_path",
        },
      ],
    },

    strict_monotheism_path: {
      id: "strict_monotheism_path",
      type: "scene",
      title: "Strict Monotheism",
      text: [
        "You choose to uphold strict monotheism, insisting that God is absolutely one and indivisible. Because of this, you come to be called Monarchians. In your view, any attempt to divide God into multiple persons weakens His unity.",
        "Yet the question of Jesus remains unavoidable. If God is one, why is Jesus called Lord? How does he relate to God? Within your movement, new divisions quickly emerge.",
        "One group develops what is later called Adoptionism. They argue that Jesus was originally human, but because of his complete obedience and excellence, God chose him and “adopted” him as His Son at a certain moment, granting him special authority.",
        "Another group proposes a different solution, known as Modalism. They insist that God has always been one, but reveals Himself in different modes or roles across history. As Father, He creates; as Son, He becomes incarnate; as Spirit, He continues to act among believers. Father, Son, and Spirit are not distinct persons existing simultaneously, but different expressions of the same God.",
      ],
      choices: [
        {
          id: "adopted_son",
          label: "Jesus was originally human and was elevated by God.",
          nextId: "adoptionism_ending",
        },
        {
          id: "one_god_many_modes",
          label: "Father, Son, and Spirit are different manifestations of the same God.",
          nextId: "modalism_ending",
        },
      ],
    },

    adoptionism_ending: {
      id: "adoptionism_ending",
      type: "ending",
      title: "Adoptionism",
      text: [
        "You choose Adoptionism. In your view, Jesus was a human being who, through perfect obedience, was chosen and elevated by God to become His Son. This preserves the absolute unity of God, while still explaining Jesus’ unique role.",
        "For a time, this view spreads among certain groups. You emphasize Jesus as a moral example and model of obedience, understanding salvation as the restoration of the relationship between humans and God.",
        "However, as the Church develops more unified doctrine, more and more Christians insist that Jesus existed before his birth and possesses true divinity. Your position is increasingly seen as diminishing Christ’s status and unable to fully explain salvation.",
        "In later debates and councils, your view is condemned as heresy. Your writings are lost, your communities fade, and your position survives only as a reference point in later discussions of Christology.",
      ],
      ending: {
        key: "adoptionism",
        label: "Adoptionism",
      },
      choices: [],
    },

    modalism_ending: {
      id: "modalism_ending",
      type: "ending",
      title: "Modalism",
      text: [
        "You choose Modalism. In your view, God is always one and the same. Yahweh is the only God, and Jesus and the Holy Spirit are not separate beings, but different ways in which God reveals Himself.",
        "God acts as Father in creation, as Son in the incarnation, and as Spirit in the life of believers. This preserves God’s absolute unity, while still affirming that Jesus is fully divine—God Himself present in history.",
        "For a time, this teaching spreads rapidly. Its clarity and simplicity attract those who seek a pure form of monotheism. However, as theological reflection deepens, many begin to see problems. If Father and Son are not truly distinct, how can Jesus pray to the Father? How can he be sent, suffer, and obey?",
        "In later debates, your position is judged to blur the distinction between Father and Son and is rejected as error. As more structured doctrine emerges, your movement declines, though the question you raised—whether one God can appear in different ways—continues to resurface throughout history.",
      ],
      ending: {
        key: "modalism",
        label: "Modalism",
      },
      choices: [],
    },

    logos_path: {
      id: "logos_path",
      type: "scene",
      title: "Jesus as the Logos",
      text: [
        "You choose to understand Jesus as the Logos. He existed before all things, has a unique relationship with God, and therefore possesses true divinity. This allows you to explain why he can bring salvation and why his status is higher than any ordinary human.",
        "But a new question arises: if he is divine, what does his earthly life really mean? Did he truly have a human body, experiencing hunger, suffering, and death? Or was his appearance only a manifestation—a divine being temporarily appearing in human form?",
      ],
      choices: [
        {
          id: "only_appeared_human",
          label: "He only appeared to be human.",
          nextId: "docetism_ending",
        },
        {
          id: "truly_became_human",
          label: "He truly became human in the flesh.",
          nextId: "true_incarnation_path",
        },
      ],
    },

    docetism_ending: {
      id: "docetism_ending",
      type: "ending",
      title: "Docetism",
      text: [
        "You choose to believe that Jesus did not truly have a physical body. His appearance on earth was only an outward form—a divine being appearing as human, but not truly entering the material world.",
        "In your view, God is pure and transcendent, and cannot truly be limited by flesh or experience real suffering. Therefore, the crucifixion is not literal suffering, but more like an appearance.",
        "This view is not rare in your time. It appears across multiple movements, especially among Gnostic groups, and even within some mainstream circles. However, as the Church increasingly insists that salvation depends on Christ truly becoming human and truly suffering, your position is rejected as undermining the reality of salvation.",
        "Over time, it is condemned as heresy and gradually disappears, leaving only scattered traces in historical records.",
      ],
      ending: {
        key: "docetism",
        label: "Docetism",
      },
      choices: [],
    },

    true_incarnation_path: {
      id: "true_incarnation_path",
      type: "scene",
      title: "The Question of the Spirit",
      text: [
        "You choose to believe that Jesus truly became human. He had a real body, experienced hunger, pain, and death. This understanding gives salvation a concrete meaning—his suffering is real, and directly connected to human existence.",
        "But as you reflect further, another question emerges: What is the Holy Spirit?",
        "In some writings, the Spirit appears as a force—guiding, inspiring, comforting. But its nature is unclear.",
        "Some believe the Spirit is simply God’s power or presence, not a distinct being with its own will. Others begin to see the Spirit as something more—capable of acting, guiding, and even being understood as a distinct person alongside the Father and the Son.",
      ],
      choices: [
        {
          id: "spirit_power",
          label: "The Spirit is God’s power or presence, not a distinct person.",
          nextId: "binitarian_ending",
        },
        {
          id: "spirit_person",
          label: "The Spirit is a real person distinct from the Father and the Son.",
          nextId: "spirit_person_path",
        },
      ],
    },

    binitarian_ending: {
      id: "binitarian_ending",
      type: "ending",
      title: "Binitarian Tendency",
      text: [
        "You choose to see the Holy Spirit not as a distinct person, but as God’s power or presence—the extension of the Father and Son’s work in the world.",
        "In your understanding, God remains one, but you begin to distinguish between Father and Son. The Spirit, however, does not have the same status. Later, this tendency is sometimes described as a kind of “binitarian” structure.",
        "This is not a clearly defined movement, but rather a common pattern in early Christian thought. In prayer and teaching, Father and Son are emphasized, while the Spirit remains less clearly defined.",
        "However, this structure proves unstable. As theological reflection continues, more and more Christians begin to include the Spirit fully within the divine identity. Over time, a more complete formulation emerges—the Trinity.",
        "Your position becomes a transitional stage rather than a lasting conclusion.",
      ],
      ending: {
        key: "binitarian",
        label: "Binitarianism",
      },
      choices: [],
    },

    spirit_person_path: {
      id: "spirit_person_path",
      type: "scene",
      title: "New Revelation?",
      text: [
        "You choose to believe that the Holy Spirit is a true person—capable of will and action, distinct yet participating in God’s work alongside the Father and the Son.",
        "You hear stories of the Spirit descending, guiding believers, and speaking through prophets. You experience its presence in prayer and community. This convinces you that the Spirit has not ceased to act after Jesus’ departure.",
        "However, a new controversy arises. A man named Montanus begins to proclaim that the Spirit is still giving new revelations. He and his followers claim direct inspiration, delivering prophecies and calling believers to a more intense spiritual life.",
        "Some are drawn to this movement, but others grow uneasy. Many churches come to agree that public revelation was completed in the apostolic age, and that no new revelation should be accepted. They fear that ongoing prophecy would lead to disorder and division.",
      ],
      choices: [
        {
          id: "new_revelation",
          label: "The Spirit still gives new public revelation.",
          nextId: "montanist_ending",
        },
        {
          id: "revelation_closed",
          label: "Public revelation is complete and should not be added to.",
          nextId: "toward_orthodoxy",
        },
      ],
    },

    montanist_ending: {
      id: "montanist_ending",
      type: "ending",
      title: "Montanist Movement",
      text: [
        "You choose to accept the prophet’s message, believing that the Spirit continues to speak and reveal God’s will directly. You pursue a stricter, more intense spiritual life, convinced that you are living in a new age of the Spirit.",
        "For a time, your movement attracts many followers, known for their zeal and sensitivity to spiritual experience. Even some respected figures from the broader Church are drawn to your passion.",
        "However, over time, other churches grow wary. They fear that constant new revelations will destabilize the faith and lead to division. Your movement is accused of going beyond the boundaries set by the apostles and is gradually pushed outside the mainstream.",
        "As Church structures solidify, your influence declines, and your communities fade. Yet the idea that the Spirit might still speak directly never fully disappears—it will re-emerge in different forms in later history.",
      ],
      ending: {
        key: "montanism",
        label: "Montanist Movement",
      },
      choices: [],
    },

    toward_orthodoxy: {
      id: "toward_orthodoxy",
      type: "scene",
      title: "Proto-orthodoxy",
      text: [
        "You reject the claim of new revelation. In your view, God completed His public revelation during the apostolic age, and from now on, faith must be grounded in what has already been handed down.",
        "By this time, the Christian movement has existed for nearly two centuries. Many different groups and teachings have appeared, each claiming to represent the truth. Gradually, your community forms a clearer consensus:",
        "You affirm one God, Yahweh, and accept the Old Testament as scripture. You believe Jesus is the Logos, pre-existent and truly incarnate, whose death brings salvation. You affirm the Holy Spirit as a distinct person continuing to work among believers.",
        "A theologian named Tertullian introduces the term “Trinity” to describe this belief: three persons, one substance. Yet even among you, not everyone is fully comfortable with what “one substance” means. Another theologian, Origen, proposes a hierarchical model—Father as the highest source, the Son deriving from the Father, and the Spirit in a lower position.",
        "These differences do not yet cause division, but they represent different theological tendencies.",
      ],
      choices: [
        {
          id: "tertullian",
          label: "Follow Tertullian’s formulation.",
          nextId: "proto_orthodox_main",
        },
        {
          id: "origen",
          label: "Follow Origen’s line of thought.",
          nextId: "proto_orthodox_main",
        },
      ],
    },

    proto_orthodox_main: {
      id: "proto_orthodox_main",
      type: "scene",
      title: "Rise to Dominance",
      text: [
        "Whether you follow Tertullian or Origen, you remain within the same broad movement in the early third century. You believe in Father, Son, and Spirit as three distinct realities forming one God. There are differences in how you explain their relationship, and few can give a precise definition that satisfies everyone, but overall you recognize one another as belonging to the same camp.",
        "Outside your group, many other Christian communities continue to teach different understandings of Jesus and the Gospel. You regard them as heretical. To defend your beliefs and define your boundaries, you begin to organize your scriptures. Gradually, this leads to the formation of what will become the New Testament: four Gospels are recognized, along with letters attributed to Paul and other apostles, while writings associated with groups like the Gnostics are excluded.",
        "At the same time, your movement becomes increasingly organized. A structure centered on bishops emerges, connecting churches across regions and maintaining unity. You emphasize the idea of “orthodox belief,” clearly defining what is true and what is deviation. Your theologians actively argue against rival groups, labeling them as heretics.",
        "Compared to you, other groups tend to be more fragmented and internally diverse, making it difficult for them to present a unified voice. Gradually, they lose ground. Meanwhile, your faith continues to spread throughout the Roman Empire, especially among the lower classes. Although you sometimes face persecution for refusing emperor worship and traditional sacrifices, your communities do not disappear—instead, they grow stronger.",
        "By the early fourth century, the situation changes dramatically. The Roman emperor Constantine begins to support Christianity and issues the Edict of Milan, granting it legal status. You are no longer a marginal group—you are entering the center of imperial life.",
        "But with this new position comes a new problem: When your faith becomes something the entire empire must confront, the disagreements you once tolerated can no longer remain unresolved.",
      ],
      choices: [
        {
          id: "continue",
          label: "Continue",
          nextId: "arian_controversy",
        },
      ],
    },

    arian_controversy: {
      id: "arian_controversy",
      type: "scene",
      title: "The Arian Controversy",
      text: [
        "Within your own camp, differences that once coexisted now become sharply defined. Some ideas, especially those influenced by Origen, had tried to explain the relationship between Father and Son while maintaining monotheism. They emphasized that the Son comes from the Father and is in some sense subordinate, yet still divine.",
        "In the early fourth century, this line of thought is pushed further by a presbyter in Alexandria named Arius. He argues: if the Father alone is the true highest God, then the Son cannot be equal or eternal with Him. The Son must be created—higher than all other creatures, but not truly God. As he famously puts it: “There was a time when the Son was not.”",
        "This claim triggers intense controversy.",
        "On the other side stands a young deacon, Athanasius, who firmly opposes Arius. He argues that if the Son is not fully God, then he cannot truly bring salvation or unite humanity with God.",
        "The debate shifts from “Was the Son created?” to a more precise question: What is the relationship in essence between the Father and the Son?",
        "One side insists the Son is fundamentally different and created. The other insists the Son shares the same divine essence as the Father.",
        "As the dispute spreads, churches divide, cities take sides, and even ordinary believers are drawn into the conflict. To resolve the crisis, in the year 325, Emperor Constantine calls a council at Nicaea, gathering hundreds of bishops to seek unity.",
        "At the council, a small number firmly support Arius, another group stands with Athanasius, and many remain in between—uneasy with both extremes.",
      ],
      choices: [
        {
          id: "support_arius",
          label: "Support Arius.",
          nextId: "support_arius_path",
        },
        {
          id: "support_athanasius",
          label: "Support Athanasius.",
          nextId: "nicene_ending",
        },
      ],
    },

    support_arius_path: {
      id: "support_arius_path",
      type: "scene",
      title: "After Nicaea",
      text: [
        "You choose to support Arius. At Nicaea, after long debates, the council ultimately adopts the position that the Son is of the same substance as the Father. It seems that you have lost.",
        "But the controversy does not end. Over the following decades, the situation becomes even more unstable. Different emperors take different sides, bishops are exiled and recalled repeatedly, and churches across regions adopt conflicting positions.",
        "Your movement does not disappear. In fact, at times it regains influence, even dominance. But internally, you begin to divide. Some hold firmly to the original, more radical claim—that the Son is entirely different from the Father and not truly divine. Others try to moderate the position, saying the Son is divine and similar to the Father, but not identical.",
      ],
      choices: [
        {
          id: "radical_arianism",
          label: "The Son is entirely different from the Father and is only a created being.",
          nextId: "radical_arianism_ending",
        },
        {
          id: "moderate_position",
          label: "The Son is divine and similar to the Father, but not identical in essence.",
          nextId: "moderate_arian_path",
        },
      ],
    },

    radical_arianism_ending: {
      id: "radical_arianism_ending",
      type: "ending",
      title: "Radical Arianism",
      text: [
        "You hold firmly to the most radical position: the Son is entirely different in essence from the Father, a created being without true divinity.",
        "This view is logically consistent, but increasingly isolated. Even those who oppose the Nicene position begin to distance themselves from you. They worry that your view undermines Christ so deeply that it threatens the foundation of the faith itself.",
        "Over time, your position becomes too extreme for most to accept. Support declines, your allies abandon you, and your movement fades rapidly from the main stage of theological debate.",
      ],
      ending: {
        key: "radical_arianism",
        label: "Radical Arianism",
      },
      choices: [],
    },

    moderate_arian_path: {
      id: "moderate_arian_path",
      type: "scene",
      title: "Homoiousios",
      text: [
        "You choose a more moderate path. You accept that the Son is divine and similar to the Father, but not identical in essence, a position expressed by the term homoiousios. This position attracts many supporters and, for a time, becomes highly influential. It avoids the extremes of both radical Arianism and strict Nicene language.",
        "However, the debate does not end. As discussions about the Son stabilize, a new question arises: What is the Holy Spirit?",
        "Some argue that the Spirit is not equal to the Father and Son, but merely a power or a lower created being. Others believe that consistency requires extending full divinity to the Spirit as well.",
      ],
      choices: [
        {
          id: "deny_spirit_divinity",
          label: "The Spirit is not fully divine.",
          nextId: "pneumatomachian_ending",
        },
        {
          id: "stop_here",
          label: "Stop here and remain in the moderate position.",
          nextId: "arian_tradition_ending",
        },
      ],
    },

    pneumatomachian_ending: {
      id: "pneumatomachian_ending",
      type: "ending",
      title: "Pneumatomachians",
      text: [
        "You continue the same line of reasoning and deny that the Holy Spirit is fully divine. You see the Spirit as either God’s power or a lower being.",
        "At first, this view gains some support, especially among those cautious about fully equating the Son with the Father.",
        "But as debates continue, many begin to see a problem: if the Spirit is not truly divine, how can it give life, sanctify believers, or share in worship?",
        "In 381, at the Council of Constantinople, the Church formally declares that the Holy Spirit is fully divine, worthy of the same worship and glory as the Father and the Son.",
        "Your position is officially condemned. Your followers are excluded, your teachings suppressed, and your influence rapidly declines.",
      ],
      ending: {
        key: "pneumatomachians",
        label: "Pneumatomachians",
      },
      choices: [],
    },

    arian_tradition_ending: {
      id: "arian_tradition_ending",
      type: "ending",
      title: "Arianism",
      text: [
        "You choose not to extend the debate to the Spirit and remain in your moderate position. For a long time, your view holds significant influence. It gains support from both bishops and emperors, and for a period, it even dominates parts of the empire.",
        "However, by the late fourth century, the situation changes. At the Council of Constantinople in 381, the Church affirms the full unity of Father, Son, and Spirit. Your position begins to lose ground, especially in the core regions of the empire.",
        "Yet your movement does not vanish immediately. It spreads beyond the empire’s borders, especially among Germanic tribes such as the Goths. Among these so-called “barbarian” peoples, your beliefs take root and even become dominant.",
        "For a time, your theology returns to influence as these groups establish kingdoms within former Roman territories. But this revival carries limits. As these kingdoms integrate with Roman Christian society, their rulers choose to adopt the dominant faith to maintain unity.",
        "Gradually, your position fades under both political and religious pressure. What once seemed close to victory ultimately slips into obscurity.",
      ],
      ending: {
        key: "arian_tradition",
        label: "Arianism",
      },
      choices: [],
    },

    nicene_ending: {
      id: "nicene_ending",
      type: "ending",
      title: "Orthodoxy (Nicene Christianity)",
      text: [
        "You stand with Athanasius. At the Council of Nicaea in 325, your position is formally affirmed: the Son is not created, but is declared to be homoousios—of the same substance—with the Father.",
        "At first, this appears to be a decisive victory. Yet the reality proves far more turbulent. In the decades that follow, imperial politics shift repeatedly. Emperors change sides, bishops are exiled and restored, and the Church remains deeply divided. Even within your own camp, key terms such as “substance,” “essence,” and “person” are not yet used consistently, leading to confusion and renewed disputes.",
        "Over time, however, the situation begins to change. Your opponents grow increasingly fragmented, dividing into multiple competing positions. Meanwhile, your side gradually clarifies its language and develops a more stable theological framework.",
        "You come to articulate a more precise vision: God is one, but not solitary. The Father, Son, and Spirit are distinct, yet share the same divine essence (homoousios).",
        "The decisive turning point comes with imperial support. In the late fourth century, Emperor Theodosius I fully endorses your position and establishes Christianity as the official religion of the empire. He convenes the Council of Constantinople in 381, which reaffirms the Nicene position and explicitly declares the full divinity of the Holy Spirit.",
        "The Nicene Creed is expanded and stabilized, forming the version that is widely accepted in later Christianity.",
        "This creed establishes a lasting theological framework:",
        "God is one in essence.",
        "The Son is eternal, not created.",
        "The Father, Son, and Spirit are distinct yet fully divine.",
        "Salvation is effective because Christ is truly God.",
        "Over time, your position comes to be established as the dominant and officially recognized doctrine of the Church. What was once one interpretation among many is now defined as orthodoxy, shaping the future of most Christian traditions.",
      ],
      ending: {
        key: "orthodoxy_nicene",
        label: "Orthodoxy (Nicene Christianity)",
      },
      choices: [],
    },
  },
};

export default gameDataEn;