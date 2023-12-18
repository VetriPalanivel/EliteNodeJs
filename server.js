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

  //OnGoing Project Controller
 app.route('/get_ongoing_project').get(upload.single('image'),getOnGoingProjectController(db));
 app.route('/post_ongoing_project').post(upload.single('image'),postOnGoingProjectController(db));
 app.route('/put_ongoing_project').put(upload.single('image'),updateOnGoingProjectController(db));

 //ResearchAssistantJob Controller
 app.route('/get_research_assistantjob').get(upload.single('image'),getResearchAssistantJobsController(db));
 app.route('/post_research_assistantjob').post(upload.single('image'),postResearchAssistantJobsController(db));
 app.route('/put_research_assistantjob').put(upload.single('image'),updateResearchAssistantJobsController(db));

 //Ambassador Controller
 app.route('/get_ambassador').get(upload.single('image'),getAmbassadorController(db));
 app.route('/put_ambassador').put(upload.single('image'),updateAmbassadorController(db));
 app.route('/post_ambassador').post(upload.single('image'),postAmbassadorController(db));

 //Clubs Controller
 app.route('/get_clubs_societies').get(upload.single('image'),getClubsController(db));
 app.route('/put_clubs_societies').put(upload.single('image'),updateClubsController(db));
 app.route('/post_clubs_societies').post(upload.single('image'),postClubsController(db));

 //Committe Controller
 app.route('/get_committe').get(upload.single('image'),getCommitteController(db));
 app.route('/put_committe').put(upload.single('image'),updateCommitteController(db));
 app.route('/post_committe').post(upload.single('image'),postCommitteController(db));

 //Competetion Controller
 app.route('/get_competetion').get(upload.single('image'),getCompetetionController(db));
 app.route('/put_competetion').put(upload.single('image'),updateCompetetionController(db));
 app.route('/post_competetion').post(upload.single('image'),postCompetetionController(db));

 //Course Controller
 app.route('/get_course').get(upload.single('image'),getCourseController(db));
 app.route('/put_course').put(upload.single('image'),updateCourseController(db));
 app.route('/post_course').post(upload.single('image'),postCourseController(db));

//  Exhibition Controller
app.route('/get_exhibition').get(upload.single('image'),getExhibitionController(db));
app.route('/put_exhibition').put(upload.single('image'),updateExhibitionController(db));
app.route('/post_exhibition').post(upload.single('image'),postExhibitionController(db));

//Inovation Project Controller
app.route('/get_inovation_project').get(upload.single('image'),getInovationProjectController(db));
app.route('/put_inovation_project').put(upload.single('image'),updateInovationProjectController(db));
app.route('/post_inovation_project').post(upload.single('image'),postInovationProjectController(db));

//News Controller
app.route('/get_news').get(upload.single('image'),getNewsController(db));
app.route('/put_news').put(upload.single('image'),updateNewsController(db));
app.route('/post_news').post(upload.single('image'),postNewsController(db));

//Roles Controller
app.route('/get_roles').get(upload.single('image'),getRolesController(db));
app.route('/put_roles').put(upload.single('image'),updateRolesController(db));
app.route('/post_roles').post(upload.single('image'),postRolesController(db));


//Sponsors Controller
app.route('/get_sponsors').get(upload.single('image'),getSponsorsController(db));
app.route('/put_sponsors').put(upload.single('image'),updateSponsorsController(db));
app.route('/post_sponsors').post(upload.single('image'),postSponsorsController(db));

//TeamMember Controller
app.route('/get_team_member').get(upload.single('image'),getTeamMemberController(db));
app.route('/put_team_member').put(upload.single('image'),updateTeamMemberController(db));
app.route('/post_team_member').post(upload.single('image'),postTeamMemberController(db));

//Training Controller
app.route('/get_training').get(upload.single('image'),getTrainingController(db));
app.route('/put_training').put(upload.single('image'),updateTrainingController(db));
app.route('/post_training').post(upload.single('image'),postTrainingController(db));

//Workshop Controller
app.route('/get_workshop').get(upload.single('image'),getWorkshopsController(db));
app.route('/put_workshop').put(upload.single('image'),updateWorkshopsController(db));
app.route('/post_workshop').post(upload.single('image'),postWorkshopsController(db));

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
