package sem12122.sse3305;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import sem12122.sse3305.service.PensionServiceIMP;

public class PensionController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	RequestDispatcher dispatcher = null;
	DecimalFormat df = new DecimalFormat("#.00");

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String action = request.getParameter("Button");

		switch (action) {

		case "CALCULATE":
			calculatePension(request, response);
			break;

		case "README":
			dispatcher = request.getRequestDispatcher("/readme.jsp");
			dispatcher.forward(request, response);
			
		default:
			break;

		}

	}

	private void calculatePension(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());

		PensionServiceIMP psi = new PensionServiceIMP();
		ArrayList<String> details = new ArrayList<String>();
		ArrayList<String> output = new ArrayList<String>();

		details = getPensionDetail(request, response);
		output = psi.kirapencen(details);

		request.setAttribute("tlahir1", details.get(0));
		request.setAttribute("tlahir2", details.get(1));
		request.setAttribute("tlahir3", details.get(2));
		request.setAttribute("tmkhidmat1", details.get(3));
		request.setAttribute("tmkhidmat2", details.get(4));
		request.setAttribute("tmkhidmat3", details.get(5));
		request.setAttribute("gaji", details.get(6));
		request.setAttribute("imbuhant", details.get(7));
		request.setAttribute("gcuti", details.get(8));
		request.setAttribute("cutihari", details.get(9));
		request.setAttribute("cutibulan", details.get(10));
		request.setAttribute("cutitahun", details.get(11));
		request.setAttribute("tsarapilih1", details.get(12));
		request.setAttribute("tsarapilih2", details.get(13));
		request.setAttribute("tsarapilih3", details.get(14));
		request.setAttribute("jantina", details.get(15));
		request.setAttribute("listimewa", details.get(16));

		String tiadaganjaran = output.get(2);
		System.out.println("tiadaganjaranx=" + tiadaganjaran);

		if (tiadaganjaran.equals("0")) {
			request.setAttribute("umursara2", output.get(0));
			request.setAttribute("umursara1", output.get(1));
			request.setAttribute("bulankhid", output.get(3));
			request.setAttribute("jumpencen", output.get(4));
			request.setAttribute("jumganjaran", output.get(5));
			request.setAttribute("jumgcr", output.get(6));
			request.setAttribute("tsara", output.get(7));	
		} else if (tiadaganjaran.equals("1")) {
			request.setAttribute("umursara2", output.get(0));
			request.setAttribute("umursara1", output.get(1));
			request.setAttribute("bulankhid", output.get(3));
			request.setAttribute("jumpencen", "0.00");
			request.setAttribute("jumganjaran", "0.00");
			request.setAttribute("jumgcr", "0.00");
			request.setAttribute("tsara", output.get(7));
			request.setAttribute("NOTIFICATION",
					"Tidak layak untuk besara pilihan pada tarikh yang telah diberikan kerana umur kurang dari 40 tahun!");
		} else {
			request.setAttribute("umursara2", output.get(0));
			request.setAttribute("umursara1", output.get(1));
			request.setAttribute("bulankhid", output.get(3));
			request.setAttribute("jumpencen", "0.00");
			request.setAttribute("jumganjaran", "0.00");
			request.setAttribute("jumgcr", "0.00");
			request.setAttribute("tsara", output.get(7));
			request.setAttribute("NOTIFICATION",
					"Tidak layak untuk menerima ganjaran kerana tempoh perkhidmatan yang boleh dimasukkira kurang dari 10 tahun (120 bulan)");
		}

		dispatcher = request.getRequestDispatcher("/index.jsp");
		dispatcher.forward(request, response);

	}

	public ArrayList<String> getPensionDetail(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ArrayList<String> PensionDetail = new ArrayList<String>();
		String tlahir1 = request.getParameter("tlahir1");
		String tlahir2 = request.getParameter("tlahir2");
		String tlahir3 = request.getParameter("tlahir3");
		String tmkhidmat1 = request.getParameter("tmkhidmat1");
		String tmkhidmat2 = request.getParameter("tmkhidmat2");
		String tmkhidmat3 = request.getParameter("tmkhidmat3");
		String gaji = request.getParameter("gaji");
		String imbuhant = request.getParameter("imbuhant");
		String gcuti = request.getParameter("gcuti");
		String cutihari = request.getParameter("cutihari");
		String cutibulan = request.getParameter("cutibulan");
		String cutitahun = request.getParameter("cutitahun");
		String tsarapilih1 = request.getParameter("tsarapilih1");
		String tsarapilih2 = request.getParameter("tsarapilih2");
		String tsarapilih3 = request.getParameter("tsarapilih3");
		String jantina = request.getParameter("jantina");
		String listimewa = request.getParameter("listimewa");

		PensionDetail.add(tlahir1);
		PensionDetail.add(tlahir2);
		PensionDetail.add(tlahir3);
		PensionDetail.add(tmkhidmat1);
		PensionDetail.add(tmkhidmat2);
		PensionDetail.add(tmkhidmat3);
		PensionDetail.add(gaji);
		PensionDetail.add(imbuhant);
		PensionDetail.add(gcuti);
		PensionDetail.add(cutihari);
		PensionDetail.add(cutibulan);
		PensionDetail.add(cutitahun);
		PensionDetail.add(tsarapilih1);
		PensionDetail.add(tsarapilih2);
		PensionDetail.add(tsarapilih3);
		PensionDetail.add(jantina);
		PensionDetail.add(listimewa);

		return PensionDetail;
	}

}
