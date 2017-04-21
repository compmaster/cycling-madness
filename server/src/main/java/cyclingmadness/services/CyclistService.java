package cyclingmadness.services;

import cyclingmadness.dto.Cyclist;
import cyclingmadness.dto.CyclistType;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

/**
 * Service related to cyclists.
 *
 * @author compmaster
 */
@Service
public class CyclistService {

	private final List<Cyclist> dummyCyclists = new ArrayList<>();

	public CyclistService() {
		String[] names = getRandomDummyNames();
		Random random = new Random();
		for(int i=0; i<names.length; ++i) {
			Cyclist cyclist = new Cyclist();
			cyclist.setId(i+1);
			cyclist.setType(getRandomType());
			cyclist.setFirstName(names[i].split(" ")[0]);
			cyclist.setLastName(names[i].split(" ")[1]);
			cyclist.setWeight(random.nextInt(90) + 30);
			cyclist.setBornDate(getRandomBornDate());
			dummyCyclists.add(cyclist);
		}
	}

	public List<Cyclist> getAllCyclists() {
		return dummyCyclists;
	}
	
	public Cyclist getCyclist(int id) {
		Optional<Cyclist> cyclist = dummyCyclists.stream().filter(x -> x.getId() == id).findFirst();
		if(cyclist.isPresent()) {
			return cyclist.get();
		} else {
			return null;
		}
	}
	
	public void createCyclist(Cyclist cyclist) {
		dummyCyclists.add(cyclist);
	}

	public void updateCyclist(Cyclist cyclist) {
		for(int i=0; i<dummyCyclists.size(); ++i) {
			if(dummyCyclists.get(i).getId() == cyclist.getId()) {
				dummyCyclists.set(i, cyclist);
				return;
			}
		}
		//TODO: throw new ObjectNotFoundException();
	}

	public void deleteCyclist(int id) {
		dummyCyclists.stream().filter(x -> x.getId() != id).collect(Collectors.toList());
	}
	
	private String[] getRandomDummyNames() {
		return new String[] {
			"Geertruida Bonnaire",
			"Aldebrand Long",
			"Heilwig Van Denend",
			"Emanuel Paulson",
			"Christin Scordato",
			"Myrrine Yamauchi",
			"Carles Neal",
			"Patricie Bajusz",
			"Rúben Ambrogi",
			"Aesop Kopecky",
			"Ambre Abrahams",
			"Rahman Padovan",
			"Matjaž Vega",
			"Otto Sykora",
			"Jurian Fox",
			"Bonifacy Rudawski",
			"Aldona Wiater",
			"Agata Jeleń",
			"Gertruda Niemec",
			"Edmund Fabian",
			"Kunegunda Pasternak",
			"Witek Kijek",
			"Stefek Śniegowski",
			"Marcelina Pokorny",
			"Ela Zima",
			"Nina Sokołowska",
			"Hubert Mencher",
			"Kajetan Ślązak",
			"Fryderyk Lis",
			"Oliwia Lawniczak"};
	}
	
	private CyclistType getRandomType() {
		Random random = new Random();
		int index = random.nextInt(CyclistType.class.getEnumConstants().length);
		return CyclistType.class.getEnumConstants()[index];
	}

	private Date getRandomBornDate() {
		Random random = new Random();
		int age = random.nextInt(70) + 18;
		LocalDate date = LocalDate.now();
		date.minusYears(age);
		return Date.from(date.atStartOfDay(ZoneId.systemDefault()).toInstant());
	}
	
}
