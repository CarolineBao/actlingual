$(document).ready(function() {
  // Points modal logic
  let execModal = document.getElementById('exec-modal');
  let modalDescription = $(".modal-description");
  let modalTitle = $(".modal-title");
  let modalLinks = document.getElementsByClassName('profilephoto');
  console.log(modalLinks);
  let modalX = document.getElementById('modal-close');

  // When the user clicks on the button, open the modal and update text
  for (let mLink of modalLinks) {
    try {
      throw mLink;
    }
    catch(modalLink) {
      let key = $(modalLink).attr('id'); 
      modalLink.onclick = function() {
        execModal.style.display = 'block';
        $(modalTitle).text(nameMap[$(modalLink).attr('id')]);
        $(modalDescription).text(descriptionMap[$(modalLink).attr('id')]);
      }
    }
  }

  // Close the modal with the X button
  modalX.onclick = function() {
    execModal.style.display = 'none';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == execModal) {
      execModal.style.display = 'none';
    }
  }

  // Exec profile descriptions

  let descriptionMap = {
    "crystal": "Course 7 with minor in 21M (Theater) and a UROP in 9. Besides Medlingual <3, I dance with ADT/DT, teach for Splash and DynaMIT, and skate with MIT FSC! I'm also interested in healthcare policy and hope to do something with the WHO, UN, or Doctors Without Borders someday :) In no particular order, I love cells, music/performing arts, the green checkmark on MITx, and hanging out with good friends, even if Boston makes our wallets sad. My favorite element is carbon *in air quotes* ORGANIC",
    "isabel": "I plan on majoring in 18 and 6-3 with a minor in Spanish and possibly also stats and data science. I'm on the varsity dive team and somehow the MacGregor badminton team. I'm from near Chicago (deep dish pizza is the best)!",
    "silvia": "I am from sunny Southern California. In my spare time, I like listening to music and dancing. I look forward to meeting new people and getting more involved in volunteer activities through Medlingual.",
    "leon": "I am a course 5-7 from Taipei, Taiwan. I grew up speaking both English and Mandarin. When I was in high school, I attended an American school, which spoke English exclusively; however, whenever we had to communicate with vendors or non-school faculty, we would need to transition into speaking mandarin. Growing up, I have had many experiences of running into people who needed to communicate across significant language barriers and have always enjoyed seeing the relief in one's eyes when someone could step up to the plate to resolve any difficulties one met. ",
    "jiaxing": "Hi!! I'm a Course 7 also interested in neuroscience. I took four years of Latin in high school and a year of Greek at MIT, but I have yet to meet anyone who speaks either. I also love doing crossword puzzles with friends!",
    "hyunji": "Hyunji is an MIT student intending to major in Computer Science and Molecular Biology (6-7) or Brain and Cognitive Science (9). She is currently researching in the Graybiel Lab on the topic of computational analysis of the brain activity during decision-making in a mouse model. She is enthusiastic to find ways to apply the skills and knowledge she has to help others.",
    "adrianna": "I am a course 20 junior who loves food, netflix, and her puppy. I got involved with Medlingual because I have family and friends who are immigrants and I want everyone to be able to have access to medical care without the barrier of language!",
    "patricia": "Local of the Boston area, mentored recent immigrant middle school students in high school, so I understand the difficulties of language and cultural barriers, like to curl up with a good book and some relaxing music in my free time",
    "lia": "Outside of academics, I enjoy the arts and music. I have learned to play the violin and cello, and currently play the double bass and piano. Since coming to MIT, I have also embraced my inner grandma and spend a lot of my free time making amigurumi, crocheting granny squares, knitting, and cross stitching. Also from observing my attachment to the cats on my floor of East Campus, I have a serious concern that I will become a crazy cat lady when I get older.",
    "shahul": "Hi there! I'm a Course 6-3 junior from Bentonville, Arkansas. English is my first language; I also speak Bengali (due to my heritage) and Spanish (thanks to my schooling). At a personal level, I really resonate with the mission of Medlingual in that I understand the difficulties posed by multilingual interactions in which the two parties don't share a common language, and I'm excited about the potential of Medlingual to change that in the Boston area.\n\nOutside of school, I love to play soccer, fold origami, and play my saxophone.",
    "tam": "1) Course 20, UROP in Langer Lab on oral stem cells and mucosa regeneration 2) love dancing, kpop, classical music, binge watch grey's anatomy 3) live on Burton 4 4) not sure what I wanna do but generally make a significant impact on health care for people around the world"
  };

  let nameMap = {
    "crystal": "Crystal Chang",
    "isabel": "Isabel Rosa",
    "silvia": "Silvia Cao",
    "leon": "Leon Yim",
    "jiaxing": "Jiaxing Liu",
    "hyunji": "Hyunji Kim",
    "adrianna": "Adrianna (Audri) Amaro",
    "patricia": "Patricia Chan",
    "lia": "Lia Tian",
    "shahul": "Shahul Alam",
    "tam": "Tam Nguyen"
  };
});
