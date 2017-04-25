package cyclingmadness.services;

import cyclingmadness.dao.TeamRepository;
import cyclingmadness.dto.Team;
import cyclingmadness.dto.TeamType;
import cyclingmadness.dto.TrainingMethod;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service for actions related to teams.
 *
 * @author compmaster
 */
@Service
@Transactional
public class TeamService {

	@Autowired
	TeamRepository teamRepository;

	@PostConstruct
	public void init() {
		createDummyTeams();
	}

	public List<Team> getAllTeams() {
		return teamRepository.findAll();
	}

	public Team getTeam(long id) {
		return teamRepository.findOne(id);
	}

	public void createTeam(Team team) {
		teamRepository.save(team);
	}

	public void deleteTeam(long id) {
		teamRepository.delete(id);
	}

	private void createDummyTeams() {
		Team team1 = new Team();
		team1.setName("MTB Masters");
		team1.setTrainingMethod(TrainingMethod.SCRUM);
		team1.setType(TeamType.MTB_AMATEUR);
		team1.setInfo("Let's train MTB together in SCRUM methodology!");

		Team team2 = new Team();
		team2.setName("Journey to Arcadia");
		team2.setInfo("Riding expeditions all over the world.");
		team2.setTrainingMethod(TrainingMethod.SELF);
		team2.setType(TeamType.TRIP);

		Team team3 = new Team();
		team3.setName("Fast As The Hell");
		team3.setInfo("Road cycling team for the win & victory!");
		team3.setTrainingMethod(TrainingMethod.COACH);
		team3.setType(TeamType.ROAD_AMATEUR);

		teamRepository.save(team1);
		teamRepository.save(team2);
		teamRepository.save(team3);
	}

}
