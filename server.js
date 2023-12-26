const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const multer = require('multer');
const DBService = require('./dbService');
const {getOnGoingProjectController,postOnGoingProjectController,updateOnGoingProjectController} = require('./controllers/OnGoingProject');
const { getResearchAssistantJobsController,updateResearchAssistantJobsController,postResearchAssistantJobsController } = require('./controllers/ResearchAssistantJobs');
const { getAmbassadorController,updateAmbassadorController,postAmbassadorController } = require('./controllers/Ambassador');
const { getClubsController,updateClubsController,postClubsController } = require('./controllers/Clubs');
const { getCommitteController,updateCommitteController,postCommitteController } = require('./controllers/Committe');
const { getCompetetionController,updateCompetetionController,postCompetetionController } = require('./controllers/Competetion');
const { getCourseController,updateCourseController,postCourseController } = require('./controllers/Course');
const { getExhibitionController,updateExhibitionController,postExhibitionController } = require('./controllers/Exhibition');
const { getInovationProjectController,updateInovationProjectController,postInovationProjectController } = require('./controllers/InovationProject');
const { getNewsController,updateNewsController,postNewsController } = require('./controllers/News');
const { getRolesController,updateRolesController,postRolesController } = require('./controllers/Roles');
const { getSponsorsController,updateSponsorsController,postSponsorsController } = require('./controllers/Sponsors');
const { getTeamMemberController,updateTeamMemberController,postTeamMemberController } = require('./controllers/TeamMember');
const { getTrainingController,updateTrainingController,postTrainingController } = require('./controllers/Training');
const { getWorkshopsController ,updateWorkshopsController,postWorkshopsController} = require('./controllers/Workshops');
const db = new DBService();
dotenv.config();
app.use(
	cors({
		origin: 'http://localhost:3000', // Allow requests from this origin
		optionsSuccessStatus: 200,
	})
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Express');
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'uploads/'); // Directory to store uploaded images
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname);
	},
  });
  
  const upload = multer({ storage: storage });
  app.use('/uploads',express.static('./uploads'))

  //OnGoing Project Controller
 app.route('/ongoing_project/get').get(getOnGoingProjectController(db));
 app.route('/ongoing_project/create').post(upload.single('image'),postOnGoingProjectController(db));
 app.route('/ongoing_project/update/:id').put(upload.single('image'),updateOnGoingProjectController(db));


 //ResearchAssistantJob Controller
 app.route('/research_assistantjob/get').get(getResearchAssistantJobsController(db));
 app.route('/research_assistantjob/create').post(upload.single('image'),postResearchAssistantJobsController(db));
 app.route('/research_assistantjob/update/:id').put(upload.single('image'),updateResearchAssistantJobsController(db));

 //Ambassador Controller
 app.route('/get_ambassador').get(getAmbassadorController(db));
 app.route('/put_ambassador').put(upload.array('images', 2),updateAmbassadorController(db));
 app.route('/post_ambassador').post(upload.array('images', 2),postAmbassadorController(db));

 //Clubs Controller
 app.route('/get_clubs_societies').get(getClubsController(db));
 app.route('/put_clubs_societies').put(upload.single('image'),updateClubsController(db));
 app.route('/post_clubs_societies').post(upload.single('image'),postClubsController(db));

 //Committe Controller
 app.route('/get_committe').get(getCommitteController(db));
 app.route('/put_committe').put(upload.single('image'),updateCommitteController(db));
 app.route('/post_committe').post(upload.single('image'),postCommitteController(db));

 //Competetion Controller
 app.route('/get_competetion').get(getCompetetionController(db));
 app.route('/put_competetion').put(upload.single('image'),updateCompetetionController(db));
 app.route('/post_competetion').post(upload.single('image'),postCompetetionController(db));

 //Course Controller
 app.route('/get_course').get(getCourseController(db));
 app.route('/put_course').put(upload.single('image'),updateCourseController(db));
 app.route('/post_course').post(upload.single('image'),postCourseController(db));

//  Exhibition Controller
app.route('/get_exhibition').get(getExhibitionController(db));
app.route('/put_exhibition').put(upload.single('image'),updateExhibitionController(db));
app.route('/post_exhibition').post(upload.single('image'),postExhibitionController(db));

//Inovation Project Controller
app.route('/inovation_project/get').get(getInovationProjectController(db));
app.route('/inovation_project/update/:id').put(upload.single('image'),updateInovationProjectController(db));
app.route('/inovation_project/create').post(upload.single('image'),postInovationProjectController(db));

//News Controller
app.route('/get_news').get(getNewsController(db));
app.route('/put_news').put(upload.single('image'),updateNewsController(db));
app.route('/post_news').post(upload.single('image'),postNewsController(db));

//Roles Controller
app.route('/get_roles').get(getRolesController(db));
app.route('/put_roles').put(upload.single('image'),updateRolesController(db));
app.route('/post_roles').post(upload.single('image'),postRolesController(db));


//Sponsors Controller
app.route('/get_sponsors').get(getSponsorsController(db));
app.route('/put_sponsors').put(upload.single('image'),updateSponsorsController(db));
app.route('/post_sponsors').post(upload.single('image'),postSponsorsController(db));

//TeamMember Controller
app.route('/get_team_member').get(getTeamMemberController(db));
app.route('/put_team_member').put(upload.single('image'),updateTeamMemberController(db));
app.route('/post_team_member').post(upload.single('image'),postTeamMemberController(db));

//Training Controller
app.route('/get_training').get(getTrainingController(db));
app.route('/put_training').put(upload.single('image'),updateTrainingController(db));
app.route('/post_training').post(upload.single('image'),postTrainingController(db));

//Workshop Controller
app.route('/get_workshop').get(getWorkshopsController(db));
app.route('/put_workshop').put(upload.single('image'),updateWorkshopsController(db));
app.route('/post_workshop').post(upload.single('image'),postWorkshopsController(db));

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
