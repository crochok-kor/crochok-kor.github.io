document.addEventListener('DOMContentLoaded', () => {

    // Professor Gallery Data (IDs 1-7)
    const professorGalleryData = [
        {
            id: 1,
            title: "톈산(天⼭)산맥 북부평원과 온천 리조트",
            author: "안재섭 교수님",
            desc: "톈산(天山) 산맥은 중앙아시아를 가로지르며 타림 분지의 경계를 이루는 거대한 산맥으로, 특히 카자흐스탄 지역은 빙하와 높은 봉우리가 발달해 있다. 과거 실크로드의 교역로였던 이 평원은 유네스코 세계유산으로 지정되었으며, 현재는 온천 리조트 개발 등 관광 목적으로 활용되고 있다.",
            src: "assets/교수님 및 동문 찬조 사진/안재섭 교수님.JPG"
        },
        {
            id: 2,
            title: "꽝시 폭포의 석회화 단구",
            author: "이승철 교수님",
            desc: "라오스 루앙프라방 인근 꽝시 폭포의 석회화 단구(Travertine Terrace) 지형. 용해된 탄산칼슘이 이끼/박테리아 표면작용으로 석출되며 계단식 테라스를 형성하는 살아있는 탄산염 지형이다.",
            src: "assets/교수님 및 동문 찬조 사진/이승철 교수님.jpg"
        },
        {
            id: 3,
            title: "쇠락해가는 장항항의 상징들",
            author: "안유순 교수님",
            desc: "금강하구둑 건설 이후 퇴적물 유입으로 기능을 잃은 뜬다리 부두, 굴뚝, 콘크리트 공장이 나란히 서 있는 모습은 현재 장항항의 산업적 위치 쇠퇴를 상징적으로 보여준다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (1).jpg"
        },
        {
            id: 4,
            title: "수주팔봉 감입곡류 전경",
            author: "안유순 교수님",
            desc: "수주팔봉 칼바위 흔들다리 위에서 촬영한 사진으로, 남한강 지류인 달천이 휘감아 흐르는 감입 곡류와 석문동천이 합류하는 모습이다. 석문동천 합류 지점은 1960년대 농업용지 확보로 유로가 변경된 것이다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (2).jpg"
        },
        {
            id: 5,
            title: "수주팔봉의 구하도",
            author: "안유순 교수님",
            desc: "1960년대 농지 확보를 위해 유로가 변경되기 전, 석문동천이 흘렀던 구하도(舊河道)의 흔적으로, 지금은 둑이 막혀 논으로 활용되고 있다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (3).jpg"
        },
        {
            id: 6,
            title: "금강하구둑 전경",
            author: "안유순 교수님",
            desc: "군산시와 서천군을 잇는 금강하구둑의 모습. 지역 생태와 주민의 삶을 변화시켰으며, 강은 퇴적물을 밀어내지 못해 항구가 먼 바다로 이동하게 되었다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (4).JPG"
        },
        {
            id: 7,
            title: "거돈사지 삼층석탑",
            author: "안유순 교수님",
            desc: "신라 때 창건되어 임진왜란으로 소실된 강원도 원주 거돈사지의 모습. 보물로 지정된 삼층석탑이 중앙에 자리하며, 절이 사라진 후 고요함을 간직하고 있는 넓은 절터가 인상적이다.",
            src: "assets/교수님 및 동문 찬조 사진/안유순 교수님 (5).jpg"
        }
    ];

    // Alumni Gallery Data (IDs 8-16)
    const alumniGalleryData = [
        {
            id: 8,
            title: "토르(Tor)",
            author: "76 박상은 선배님",
            desc: "중생대 쥐라기 화강암이 오랜 풍화와 침식을 거쳐 단단한 부분만 남아 탑처럼 쌓여있는 강원도 고성군의 토르 지형.",
            src: "assets/교수님 및 동문 찬조 사진/76 박상은 선배님.jpg"
        },
        {
            id: 9,
            title: "카렌(karren)",
            author: "82 신현종 선배님",
            desc: "중국 윈난성 쿤밍시 내구석림의 카렌(용식작용으로 형성된 카르스트 지형). 기반암에 유기물이 포함되어 어두운 회색빛을 띠며, 현지에서는 '로미오와 줄리엣' 전설과 연관되어 있다.",
            src: "assets/교수님 및 동문 찬조 사진/82 신현종 선배님.jpg"
        },
        {
            id: 10,
            title: "시간의 묘미",
            author: "82 최원석 선배님",
            desc: "서해안 강화도의 조수간만의 차를 이용하여 밀물의 흐름을 장노출(1시간) 촬영으로 담아내, 가로등 빛과 물결의 흔적을 강조한 사진.",
            src: "assets/교수님 및 동문 찬조 사진/82 최원석 선배님.jpg"
        },
        {
            id: 11,
            title: "고인돌과 별 궤적",
            author: "85 김원섭 선배님",
            desc: "밤하늘 북극성을 중심으로 회전하는 별의 궤적을 배경으로 전북 고창 대산리 탁자식 고인돌을 촬영한 풍경.",
            src: "assets/교수님 및 동문 찬조 사진/85 김원섭 선배님.jpg"
        },
        {
            id: 12,
            title: "유부도의 도요새",
            author: "91 박지용 선배님",
            desc: "세계자연유산인 충남 서천 유부도 모래갯벌에서 밀물 때 모여드는 도요새 무리를 망원경으로 관찰하며 찍은 생태 사진.",
            src: "assets/교수님 및 동문 찬조 사진/91 박지용 선배님.jpg"
        },
        {
            id: 13,
            title: "목포 갓바위 해안침식지형",
            author: "93 김종현 선배님",
            desc: "목포 갓바위의 해안침식지형. 파식작용과 풍화작용으로 형성되었으며, 해식절벽, 해식노치, 타포니 등의 지형을 관찰할 수 있는 결정질 응회암 암석이다.",
            src: "assets/교수님 및 동문 찬조 사진/93 김종현 선배님.jpg"
        },
        {
            id: 14,
            title: "태백시 철암탄광촌의 흔적",
            author: "97 최자영 선배님",
            desc: "태백 일대 최대 탄광촌인 철암의 모습. 탄천변에 기둥을 세워 집을 확장한 구조는 무연탄 생산 성수기에 많은 노동자를 수용하기 위한 지역적 특색을 잘 보여준다.",
            src: "assets/교수님 및 동문 찬조 사진/97 최자영 선배님 (1).jpg"
        },
        {
            id: 15,
            title: "자본주의의 침투",
            author: "97 최자영 선배님",
            desc: "유네스코 세계유산인 베트남 호이안시 투본강변에서 촬영. 최근 관광객 증가로 공산국가의 지도자를 풍자한 상품까지 판매될 정도로 물질주의가 만연함을 보여준다.",
            src: "assets/교수님 및 동문 찬조 사진/97 최자영 선배님 (2).jpg"
        },
        {
            id: 16,
            title: "겸손의 풍경",
            author: "02 김현모 선배님",
            desc: "미국 유타주 구스넥스 스테이트 파크. 콜로라도강 지류인 샌후안강이 침식으로 만든 약 300m 깊이의 '구스넥스' (거위 목 모양) 협곡. 광대한 자연 앞에서 인간의 존재를 되돌아보게 한다.",
            src: "assets/교수님 및 동문 찬조 사진/02 김현모 선배님.jpg"
        }
    ];

    // Student Gallery Data (IDs 17-45)
    const studentGalleryData = [
        { id: 17, title: "백령도_사곶전망대", author: "20 박준서", desc: "썰물 때 비상활주로로 이용될 만큼 단단한 백령도 사곶 해변의 백사장과, 주민 생활용수를 책임지는 인공호수(석호 형태) 백령호의 모습을 함께 담았다.", src: "assets/재학생/20 박준서.jpg" },
        { id: 18, title: "채석강 해식동", author: "21 박지훈", desc: "전북 부안군 채석강 해식동굴 안에서 밖을 바라본 모습. 어두운 동굴 실루엣 사이로 푸른 하늘, 바다, 육지가 대비되어 자연이 빚어낸 액자 같은 풍경을 연출한다.", src: "assets/재학생/21 박지훈.jpeg" },
        { id: 19, title: "자연과 마을 사이", author: "22 김지원", desc: "스위스 인터라켄의 고요한 풍경. 맑은 하늘 아래 초원과 산맥이 이어지고 작은 마을이 조화롭게 자리하여, 자연과 사람의 삶이 맞닿는 평온한 순간을 담았다.", src: "assets/재학생/22 김지원.jpg" },
        { id: 20, title: "경포호의 일몰", author: "22 박정빈", desc: "강릉 경포호 수변 벤치에서 바라본 일몰 장면. 친절한 숙소 사장님의 정보로 발길을 옮겨 마주한, 넋 놓고 바라볼 수밖에 없는 아름다운 순간을 기록했다.", src: "assets/재학생/22 박정빈.jpg" },
        { id: 21, title: "7월의 알프스, 고산의 여름과 만년설의 공존", author: "22 박찬미", desc: "2025년 7월 스위스 체르마트에서 촬영한 사진. 만년설과 빙하의 침식/퇴적으로 만들어진 U자곡, 모레인, 빙하호 등 다양한 지형을 확인할 수 있는 압도적인 자연 풍경.", src: "assets/재학생/22 박찬미.jpg" },
        { id: 22, title: "도시 속 에코토피아", author: "22 배혜림", desc: "헝가리 부다페스트 민족박물관의 옥상 정원. 인공 언덕 형태의 건축물에 조성된 녹지 공간으로, 도시 한복판에서 자연을 느끼게 하는 도시 재생 및 지속가능한 문화 도시의 사례이다.", src: "assets/재학생/22 배혜림.jpg" },
        { id: 23, title: "삼악산에서 내려다본 춘천", author: "22 이채은", desc: "춘천 삼악산 전망대에서 내려다본 풍경. 하중도까지 조망할 수 있어 춘천의 지리적 요소를 담고 있는 전경 사진이다.", src: "assets/재학생/22 이채은.jpg" },
        { id: 24, title: "아소산", author: "23 고도연", desc: "일본 구마모토현의 활화산 아소산 나카타케 화구 인근에서 찍은 모습. 세계 최대급 칼데라와 웅대한 외륜산을 가진 '불의 나라' 구마모토현의 상징이다.", src: "assets/재학생/23 고도연.jpeg" },
        { id: 25, title: "소라고둥타포니", author: "23 김다린", desc: "강원도 고성군 능파대에서 소라고둥을 닮게 풍화된 타포니 지형. 학회 친구들과 여름 답사 중 마주한, 오랜 시간 자리를 지키는 기암괴석의 멋진 모습과 추억을 담았다.", src: "assets/재학생/23 김다린.jpeg" },
        { id: 26, title: "잔상(殘像)", author: "23 민희서", desc: "오스트레일리아 시드니 왓슨스 베이에서 노을이 질 무렵, 공원에 누워 호주의 여유로움을 느끼며 찰나의 순간을 눈과 사진에 오래도록 기록한 풍경.", src: "assets/재학생/23 민희서.jpg" },
        { id: 27, title: "게르와 함께 마주한 노을", author: "23 박지은", desc: "몽골 테를지 국립공원에서 마주한 잊을 수 없는 일몰 풍경. 몽골 전통 가옥인 '게르'는 건조한 스텝 기후와 유목 생활에 적응한 이 지역의 지리적 특성을 고스란히 담고 있다.", src: "assets/재학생/23 박지은.jpg" },
        { id: 28, title: "절벽의 끝, 바다의 시작", author: "23 신혜지", desc: "인도네시아 발리 짐바란 쿠부 비치에서 찍은 사진. 절벽의 끝과 바다의 시작이 만나는 절경이 발리의 지리적 특성을 잘 표현하고 있다.", src: "assets/재학생/23 신혜지.jpg" },
        { id: 29, title: "백록담", author: "23 이상화", desc: "해발 1950m 한라산 정상에서 구름 속에 숨어있다 모습을 드러낸 백록담. 선명하고 푸르게 빛나는 듯한 분화구 호수의 모습을 포착했다.", src: "assets/재학생/23 이상화.jpg" },
        { id: 30, title: "소백의 능선", author: "23 장다연", desc: "하늘과 맞닿은 소백산의 웅장한 능선 파노라마. 서리가 내린 나뭇가지와 아득하게 펼쳐진 산맥의 조화가 돋보인다.", src: "assets/재학생/23 장다연.jpeg" },
        { id: 31, title: "흰 수염 폭포의 신비로운 빛", author: "23 장예슬", desc: "일본 홋카이도에서 촬영된 흰 수염 폭포. 새하얀 눈과 얼음 기둥, 푸른빛 물줄기와 에메랄드빛 웅덩이가 만나 장엄하고 신비로운 빙하 예술 작품을 연상시킨다.", src: "assets/재학생/23 장예슬.JPG" },
        { id: 32, title: "시드니의 밤", author: "23 조연주", desc: "오스트레일리아 Mrs Macquaries Point에서 촬영한 시드니의 밤 풍경. 오페라 하우스와 하버브릿지를 한 번에 볼 수 있는 랜드마크의 야경을 담았다.", src: "assets/재학생/23 조연주.jpeg" },
        { id: 33, title: "도시의 대비", author: "23 지소민", desc: "중국 다롄 동항 음악분수 광장을 등지고 볼 수 있는 유럽풍 테마 거리와 그 뒤편의 현대적인 고층 건물들. 과거의 분위기와 경제 성장을 상징하는 현대적 도시 경관의 대비를 보여준다.", src: "assets/재학생/23 지소민.jpg" },
        { id: 34, title: "변화하는 하천합류부", author: "24 김도현", desc: "세종시 미호강과 금당의 합류부. 예전에는 직각에 가까웠으나 침식과 퇴적에 의해 각이 달라진 모습을 관찰하며 변화하는 하천 지형을 경험한 기록.", src: "assets/재학생/24 김도현.jpg" },
        { id: 35, title: "파호이호이!", author: "24 박유진", desc: "제주 우도에서 발견한 파호이호이 용암 지형. 끈적끈적한 현무암 용암이 흐르다가 굳어 표면이 밧줄처럼 주름진 모양을 하고 있다.", src: "assets/재학생/24 박유진.jpg" },
        { id: 36, title: "선유도 낙조", author: "24 최윤", desc: "전북 군산시 선유도에서 바라본 서해의 붉은 낙조. 바다와 하늘을 물들이는 일몰을 통해 자연의 고요함과 새로운 시작의 빛을 담았다.", src: "assets/재학생/24 최윤.jpg" },
        { id: 37, title: "화산섬을 물들이는 저녁빛", author: "25 김가빈", desc: "제주 우도 해안에서 촬영된 일몰 장면. 현무암 암석 지대의 굴곡진 해안선과 해양성 기후의 연무가 조화되어 선명한 일몰빛을 형성하는 복합적인 자연 경관을 보여준다.", src: "assets/재학생/25 김가빈.jpeg" },
        { id: 38, title: "인왕산 모자바위", author: "25 박소연", desc: "서울 인왕산의 모자바위. 차별풍화에 의해 형성된 독립된 암괴 지형인 토르(Tor)의 한 형태이다.", src: "assets/재학생/25 박소연.jpg" },
        { id: 39, title: "석문", author: "25 서수민", desc: "충북 단양의 석문. 두 개의 바위 기둥을 또 다른 바위가 가로질러 천연의 문을 이룬 기암가경으로, 문 안에 남한강의 풍경이 가득 담겨있다.", src: "assets/재학생/25 서수민.jpeg" },
        { id: 40, title: "자연과 하나되어-", author: "25 손상현", desc: "강릉 오죽헌 경내에 우뚝 선 문성사(文成祠). 자연과 하나 된 한국의 전통적인 건축미를 담아냈다.", src: "assets/재학생/25 손상현.jpg" },
        { id: 41, title: "남쪽 끝의 바위", author: "25 신윤서", desc: "우리나라 국토 최남단인 제주 마라도 남측 해안의 현무암 해식절벽과 바위 지형. 파식대 위로 파도가 부딪히는 모습에서 마라도 해안 침식 지형의 특징이 드러난다.", src: "assets/재학생/25 신윤서.jpg" },
        { id: 42, title: "유럽과 아시아, 그 경계선에서", author: "25 신재욱", desc: "튀르키예 이스탄불의 보스포루스 해협. 유럽과 아시아를 잇는 두 대륙의 경계선에서 페리들의 행렬과 석양 빛을 통해 동서양 문화가 교차하는 도시의 풍경을 담았다.", src: "assets/재학생/25 신재욱.jpg" },
        { id: 43, title: "끝은 새로운 시작", author: "25 이규민", desc: "제주 마라도에서 촬영한 해식애(파랑 침식으로 형성된 검은 현무암 절벽). 우리나라 국토의 끝 지점이 바다의 시작 지점이기도 하다는 철학적인 의미를 부여한다.", src: "assets/재학생/25 이규민.jpeg" },
        { id: 44, title: "강의 끝, 인간의 시작", author: "25 정의진", desc: "군산 금강하굿둑의 수문이 규칙적으로 배열된 모습. 자연을 관리하려는 인간의 기술적 의도와 함께, 생태계 흐름을 단절시키며 자연과 인간의 긴장된 상호작용 속에서 공간이 형성됨을 보여준다.", src: "assets/재학생/25 정의진.jpg" },
        { id: 45, title: "2025 제주하계답사 우도 일몰", author: "25 황지훈", desc: "2025년 제주 하계답사 6일차, 우도에서 찍은 일몰 사진. 수평선으로 떨어지는 붉은 해와 수면의 잔잔함이 대비된다.", src: "assets/재학생/25 황지훈.jpg" }
    ];

    // Combine all unique items (7 + 9 + 29 = 45 items)
    const allUniqueItems = [...professorGalleryData, ...alumniGalleryData, ...studentGalleryData];

    // Use only unique items for now
    const fullGalleryData = allUniqueItems;

    // Main Page Gallery Data (Subset)
    const galleryData = professorGalleryData;

    const galleryGrid = document.getElementById('galleryGrid');
    const fullGalleryGrid = document.getElementById('fullGalleryGrid');

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalAuthor = document.getElementById('modalAuthor');
    const modalDesc = document.getElementById('modalDesc');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImageIndex = 0;
    let currentGalleryList = [];

    // Function to open modal
    function openModal(index, list) {
        currentImageIndex = index;
        currentGalleryList = list;
        updateModalContent();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to update modal content
    function updateModalContent() {
        const item = currentGalleryList[currentImageIndex];
        modalImage.src = item.src;
        modalTitle.textContent = item.title;
        modalAuthor.textContent = `Artist: ${item.author}`;
        modalDesc.textContent = item.desc;
    }

    // Function to create gallery item
    function createGalleryItem(item, index, list) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-on-scroll'; // Add animation class

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.className = 'gallery-img';

        img.onerror = function () {
            this.style.display = 'none';
            this.parentElement.style.backgroundColor = '#ccc';
        };

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <h3 class="gallery-title">${item.title}</h3>
            <p class="gallery-author">${item.author}</p>
        `;

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        galleryItem.addEventListener('click', () => {
            openModal(index, list);
        });

        return galleryItem;
    }

    // Populate Main Page Gallery (Limit 6)
    if (galleryGrid) {
        galleryData.slice(0, 6).forEach((item, index) => {
            galleryGrid.appendChild(createGalleryItem(item, index, galleryData));
        });
    }

    // Populate Full Gallery Page
    if (fullGalleryGrid) {
        fullGalleryData.forEach((item, index) => {
            fullGalleryGrid.appendChild(createGalleryItem(item, index, fullGalleryData));
        });
    }

    // Modal Navigation Events
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
            updateModalContent();
        });

        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % currentGalleryList.length;
            updateModalContent();
        });
    }

    // Close Modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
            updateModalContent();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % currentGalleryList.length;
            updateModalContent();
        }
    });

    // Scroll Animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
