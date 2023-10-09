package sem12122.sse3305.service;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

public class PensionServiceIMP implements PensionService {

	@Override
	public ArrayList<String> kirapencen(ArrayList<String> details) {

		DecimalFormat df = new DecimalFormat("#.00");
		ArrayList<String> output = new ArrayList<String>();

		String[] montharray = new String[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",
				"Nov", "Dec" };
		int[] daysofmontharray = new int[] { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

		String sDate1 = "Apr 12, 1991";
		Date tarapril = null;
		try {
			tarapril = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH).parse(sDate1);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		int tlahir_hari = Integer.parseInt(details.get(0));
		int tlahir_bulan = Integer.parseInt(details.get(1));
		int tlahir_tahun = Integer.parseInt(details.get(2));

		int tmkhidmat_hari = Integer.parseInt(details.get(3));
		int tmkhidmat_bulan = Integer.parseInt(details.get(4));
		int tmkhidmat_tahun = Integer.parseInt(details.get(5));

		double gajiakhir = Double.parseDouble(details.get(6));
		double imbuhantetap = Double.parseDouble(details.get(7));
		double gantiancuti = Double.parseDouble(details.get(8));

		int cuti_bulan = Integer.parseInt(details.get(10));
		int cuti_tahun = Integer.parseInt(details.get(11));

		int tpencen_hari = Integer.parseInt(details.get(12));
		int tpencen_bulan = Integer.parseInt(details.get(13));
		int tpencen_tahun = Integer.parseInt(details.get(14));

		String tjantina = details.get(15);
		String tistimewa = details.get(16);

		// ******* to obtain pension age: month and year

		int bulan_cuti_tg = (cuti_tahun * 12) + cuti_bulan;
		int minusbulan = 0;
		int minustahun;
		int plusbulan = 0;

		minustahun = 0;
		if (tpencen_hari < tlahir_hari)
			minusbulan = 1;
		if ((tpencen_bulan - minusbulan) < tlahir_bulan) {
			plusbulan = 12;
			minustahun = 1;
		}

		int umursara_bulan = tpencen_bulan - minusbulan + plusbulan - tlahir_bulan;
		int umursara_tahun = tpencen_tahun - minustahun - tlahir_tahun;

		output.add(Integer.toString(umursara_bulan));
		output.add(Integer.toString(umursara_tahun));

		// **** change date format

		String mkstr = montharray[tmkhidmat_bulan - 1] + " " + tmkhidmat_hari + ", " + tmkhidmat_tahun;
		String mpstr = montharray[tpencen_bulan - 1] + " " + tpencen_hari + ", " + tpencen_tahun;

		Date mkstr1 = null;
		try {
			mkstr1 = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH).parse(mkstr);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		Date mpstr1 = null;
		try {
			mpstr1 = new SimpleDateFormat("MMMM d, yyyy", Locale.ENGLISH).parse(mpstr);
		} catch (ParseException e) { // TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println("mpstr1=" + mpstr1);

		// ***** Calculate start date before 12/04/1991

		int umurbayarpencen = 0;

		if (mkstr1.before(tarapril) && ((tjantina.equals("L") && tistimewa.equals("Y")) || tjantina.equals("P"))) {
			umurbayarpencen = 45;
		} else {
			if (mkstr1.before(tarapril)) {
				umurbayarpencen = 50;
			} else {
			}
			umurbayarpencen = 55;
		}

		// ************* calculate month working
		minusbulan = 0;
		minustahun = 0;
		plusbulan = 0;

		if (tpencen_hari < tmkhidmat_hari)
			minusbulan = 1;
		if ((tpencen_bulan - minusbulan) < tmkhidmat_bulan) {
			minustahun = 1;
			plusbulan = 12;
		}

		int tbk = tpencen_bulan - minusbulan + plusbulan - tmkhidmat_bulan;
		int ttk = tpencen_tahun - minustahun - tmkhidmat_tahun;

		int bulankira = ((ttk * 12) + tbk) - bulan_cuti_tg;

		// ****** calculate service more than 10 years
		// ****** Pensioner age must 40 above

		int tiadaganjaran = 0;

		if (umursara_tahun < 40) {
			tiadaganjaran = 1;
		}

		if ((bulankira < 120) && (umursara_tahun >= 40)) {
			tiadaganjaran = 2;
		}

		output.add(Integer.toString(tiadaganjaran));
		output.add(Integer.toString(bulankira));

		int bulanganjar = bulankira;

		double PencenMinima = 0.00;
		if (bulankira > 360)
			bulankira = 360;

		double jumpenc = (1.00 / 600.00) * bulankira * gajiakhir;
		PencenMinima = jumpenc;

		if (PencenMinima < 720)
			PencenMinima = 720;
		if (bulankira < 300)
			PencenMinima = jumpenc;

		output.add(df.format(PencenMinima));

		double jumganjar = 0.075 * bulanganjar * gajiakhir;

		output.add(df.format(jumganjar));

		if (gantiancuti > 150)
			gantiancuti = 150;

		double jumganjarancr = (1.00 / 30.00) * gantiancuti * (gajiakhir + imbuhantetap);

		output.add(df.format(jumganjarancr));

		// ***** kira tarikh pencen mula dibayar

		int tbayar_hari = tlahir_hari;
		minusbulan = 0;
		if (tbayar_hari == 0) {
			tbayar_hari = daysofmontharray[tlahir_bulan - 1];
			minusbulan = 1;
		}

		int tbayar_bulan = tlahir_bulan - minusbulan;
		if (tbayar_bulan == 0) {
			tbayar_bulan = 12;
			minustahun = 1;
		}

		int tbayar_tahun = tlahir_tahun + umurbayarpencen - minustahun;
		output.add(montharray[tbayar_bulan - 1] +", "+ tbayar_tahun);

		return output;
	}
}
