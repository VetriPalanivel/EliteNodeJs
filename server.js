const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const multer = require('multer');
const DBService = require('./dbService');
const {getOnGoingProjectController,deleteOnGoingProjectController,postOnGoingProjectController,updateOnGoingProjectController} = require('./controllers/OnGoingProject');
const { getResearchAssistantJobsController,deleteResearchAssistantJobsController,updateResearchAssistantJobsController,postResearchAssistantJobsController } = require('./controllers/ResearchAssistantJobs');
const { getAmbassadorController,deleteAmbassadorController,updateAmbassadorController,postAmbassadorController } = require('./controllers/Ambassador');
const { getClubsController,updateClubsController,deleteClubsController,postClubsController } = require('./controllers/Clubs');
const { getCommitteController,deleteCommitteController,updateCommitteController,postCommitteController } = require('./controllers/Committe');
const { getCompetetionController,updateCompetetionController,deleteCompetetionController,postCompetetionController } = require('./controllers/Competetion');
const { getCourseController,updateCourseController,deleteCourseController,postCourseController } = require('./controllers/Course');
const { getExhibitionController,updateExhibitionController,deleteExhibitionController,postExhibitionController } = require('./controllers/Exhibition');
const { getInovationProjectController,updateInovationProjectController,deleteInovationProjectController,postInovationProjectController } = require('./controllers/InovationProject');
const { getNewsController,updateNewsController,deleteNewsController,postNewsController } = require('./controllers/News');
const { getRolesController,updateRolesController,deleteRolesController,postRolesController } = require('./controllers/Roles');
const { getSponsorsController,updateSponsorsController,deleteSponsorsController,postSponsorsController } = require('./controllers/Sponsors');
const { getTeamMemberController,updateTeamMemberController,deleteTeamMemberController,postTeamMemberController } = require('./controllers/TeamMember');
const { getTrainingController,updateTrainingController,deleteTrainingController,postTrainingController } = require('./controllers/Training');
const { getWorkshopsController ,updateWorkshopsController,deleteWorkshopsController,postWorkshopsController} = require('./controllers/Workshops');
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
 app.route('/ongoing_project/delete/:id').post(deleteOnGoingProjectController(db));

 //ResearchAssistantJob Controller
 app.route('/research_assistantjob/get').get(getResearchAssistantJobsController(db));
 app.route('/research_assistantjob/create').post(upload.single('image'),postResearchAssistantJobsController(db));
 app.route('/research_assistantjob/update/:id').put(upload.single('image'),updateResearchAssistantJobsController(db));
 app.route('/research_assistantjob/delete/:id').post(deleteResearchAssistantJobsController(db));

 //Ambassador Controller
 app.route('/ambassador/get').get(getAmbassadorController(db));
 app.route('/ambassador/update/:id').put(upload.single('image'),updateAmbassadorController(db));
 app.route('/ambassador/create').post(upload.single('image'),postAmbassadorController(db));
 app.route('/ambassador/delete/:id').post(deleteAmbassadorController(db));


 //Clubs Controller
 app.route('/clubs_societies/get').get(getClubsController(db));
 app.route('/clubs_societies/update/:id').put(upload.single('image'),updateClubsController(db));
 app.route('/clubs_societies/create').post(upload.single('image'),postClubsController(db));
 app.route('/clubs_societies/delete/:id').post(deleteClubsController(db));

 //Committe Controller
 app.route('/committe/get').get(getCommitteController(db));
 app.route('/committe/update/:id').put(upload.single('image'),updateCommitteController(db));
 app.route('/committe/create').post(upload.single('image'),postCommitteController(db));
 app.route('/committe/delete/:id').post(deleteCommitteController(db));

 //Competetion Controller
 app.route('/competetion/get').get(getCompetetionController(db));
 app.route('/competetion/update/:id').put(upload.single('image'),updateCompetetionController(db));
 app.route('/competetion/create').post(upload.single('image'),postCompetetionController(db));
 app.route('/competetion/delete/:id').post(deleteCompetetionController(db));

 //Course Controller
 app.route('/course/get').get(getCourseController(db));
 app.route('/course/update/:id').put(upload.single('image'),updateCourseController(db));
 app.route('/course/create').post(upload.single('image'),postCourseController(db));
 app.route('/course/delete/:id').post(deleteCourseController(db));

//  Exhibition Controller
app.route('/exhibition/get').get(getExhibitionController(db));
app.route('/exhibition/update/:id').put(upload.single('image'),updateExhibitionController(db));
app.route('/exhibition/create').post(upload.single('image'),postExhibitionController(db));
app.route('/exhibition/delete/:id').post(deleteExhibitionController(db));

//Inovation Project Controller
app.route('/inovation_project/get').get(getInovationProjectController(db));
app.route('/inovation_project/update/:id').put(upload.single('image'),updateInovationProjectController(db));
app.route('/inovation_project/create').post(upload.single('image'),postInovationProjectController(db));
app.route('/inovation_project/delete/:id').post(deleteInovationProjectController(db));

//News Controller
app.route('/news/get').get(getNewsController(db));
app.route('/news/update/:id').put(upload.single('image'),updateNewsController(db));
app.route('/news/create').post(upload.single('image'),postNewsController(db));
app.route('/news/delete/:id').post(deleteNewsController(db));

//Roles Controller
app.route('/roles/get').get(getRolesController(db));
app.route('/roles/update/:id').put(upload.single('image'),updateRolesController(db));
app.route('/roles/create').post(upload.single('image'),postRolesController(db));
app.route('/roles/delete/:id').post(deleteRolesController(db));


//Sponsors Controller
app.route('/sponsors/get').get(getSponsorsController(db));
app.route('/sponsors/update/:id').put(upload.single('image'),updateSponsorsController(db));
app.route('/sponsors/create').post(upload.single('image'),postSponsorsController(db));
app.route('/sponsors/delete/:id').post(deleteSponsorsController(db));

//TeamMember Controller
app.route('/team_member/get').get(getTeamMemberController(db));
app.route('/team_member/update/:id').put(upload.single('image'),updateTeamMemberController(db));
app.route('/team_member/create').post(upload.single('image'),postTeamMemberController(db));
app.route('/team_member/delete/:id').post(deleteTeamMemberController(db));

//Training Controller
app.route('/training/get').get(getTrainingController(db));
app.route('/training/update/:id').put(upload.single('image'),updateTrainingController(db));
app.route('/training/create').post(upload.single('image'),postTrainingController(db));
app.route('/training/delete/:id').post(deleteTrainingController(db));

//Workshop Controller
app.route('/workshop/get').get(getWorkshopsController(db));
app.route('/workshop/update/:id').put(upload.single('image'),updateWorkshopsController(db));
app.route('/workshop/create').post(upload.single('image'),postWorkshopsController(db));
app.route('/workshop/delete/:id').post(deleteWorkshopsController(db));

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
