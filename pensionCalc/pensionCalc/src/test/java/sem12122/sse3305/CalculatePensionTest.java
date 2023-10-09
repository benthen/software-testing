package sem12122.sse3305;

import static org.junit.Assert.assertEquals;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.PrintStream;

import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


public class CalculatePensionTest{
	
	ByteArrayOutputStream outstream = new ByteArrayOutputStream();
    ByteArrayOutputStream errstream = new ByteArrayOutputStream();
    PrintStream out = System.out;
    PrintStream err = System.err;

    @BeforeEach
    public void setUp(){
        System.setOut(new PrintStream(outstream));
    }

	@Test
	void TC01_001() throws IOException, ServletException {
	    MockHttpServletRequest request = new MockHttpServletRequest();
	    request.setParameter("Button", "CALCULATE");
	    request.setParameter("tlahir1", "1");
	    request.setParameter("tlahir2", "6");
	    request.setParameter("tlahir3", "1960");
	    request.setParameter("tmkhidmat1", "1");
	    request.setParameter("tmkhidmat2", "6");
	    request.setParameter("tmkhidmat3", "1990");
	    request.setParameter("gaji", "10000");
	    request.setParameter("imbuhant", "2000");
	    request.setParameter("gcuti", "150");
	    request.setParameter("cutihari", "30");
	    request.setParameter("cutibulan", "4");
	    request.setParameter("cutitahun", "2");
	    request.setParameter("jantina", "P");
	    request.setParameter("listimewa", "Y");
	    request.setParameter("tsarapilih1", "2");
	    request.setParameter("tsarapilih2", "6");
	    request.setParameter("tsarapilih3", "2010");
	    
	    MockHttpServletResponse response = new MockHttpServletResponse();
	    PensionController pension = new PensionController();
	    pension.doPost(request, response);
//	    String actual_output = outstream.toString();
	    String umursara2 = request.getAttribute("umursara2").toString();		// pension age month
	    String umursara1 = request.getAttribute("umursara1").toString();		// pension age year
	    String bulankhid = request.getAttribute("bulankhid").toString();		// service period
	    String jumpencen = request.getAttribute("jumpencen").toString();		// total pension
	    String jumganjaran = request.getAttribute("jumganjaran").toString();	// gratuity
	    String jumgcr = request.getAttribute("jumgcr").toString();				// cash award
	    String tsara = request.getAttribute("tsara").toString();			
//	    String notification = request.getAttribute("NOTIFICATION").toString();	    
	    
	    List<String> expected_output = Arrays.asList("0", "45", "212", "3533.33", "159000.00", "60000.00", "Jun, 2020");
	    List<String> actual_output = Arrays.asList(umursara2, umursara1, bulankhid, jumpencen, jumganjaran, jumgcr, tsara);
	    
	    assertEquals(expected_output, actual_output);
	}
	
//	@Test
//	void TC01_002() throws IOException, ServletException {
//	    MockHttpServletRequest request = new MockHttpServletRequest();
//	    request.setParameter("Button", "CALCULATE");
//	    request.setParameter("tmkhidmat1", "1");
//	    request.setParameter("tmkhidmat2", "6");
//	    request.setParameter("tmkhidmat3", "1990");
//	    request.setParameter("tsarapilih1", "2");
//	    request.setParameter("tsarapilih2", "6");
//	    request.setParameter("tsarapilih3", "2020");
//	    request.setParameter("gaji", "10000");
//	    request.setParameter("imbuhant", "2000");
//	    request.setParameter("gcuti", "150");
//	    request.setParameter("cutihari", "30");
//	    request.setParameter("cutibulan", "4");
//	    request.setParameter("cutitahun", "2");
//	    request.setParameter("tlahir1", "20");
//	    request.setParameter("tlahir2", "10");
//	    request.setParameter("tlahir3", "999");
//	    request.setParameter("jantina", "L");
//	    request.setParameter("listimewa", "0");
//	    
//	    MockHttpServletResponse response = new MockHttpServletResponse();
//	    PensionController pension = new PensionController();
//	    pension.doPost(request, response);
////	    String actual_output = outstream.toString();
//	    String umursara2 = request.getAttribute("umursara2").toString();		// pension age month
//	    String umursara1 = request.getAttribute("umursara1").toString();		// pension age year
//	    String bulankhid = request.getAttribute("bulankhid").toString();		// service period
//	    String jumpencen = request.getAttribute("jumpencen").toString();		// total pension
//	    String jumganjaran = request.getAttribute("jumganjaran").toString();	// gratuity
//	    String jumgcr = request.getAttribute("jumgcr").toString();				// cash award
//	    String tsara = request.getAttribute("tsara").toString();			
//	    
//	    String tlahir1 = request.getAttribute("tlahir1").toString();
//	    String tlahir2 = request.getAttribute("tlahir2").toString();
//	    String tlahir3 = request.getAttribute("tlahir3").toString();
//	    
//	    List<String> expected_output = Arrays.asList("0", "54", "391", "600.00", "293250.00", "60000.00", "2025");
//	    List<String> actual_output = Arrays.asList(umursara2, umursara1, bulankhid, jumpencen, jumganjaran, jumgcr, tsara);
//	    
//	    assertEquals(expected_output, actual_output);
//	}
	
	@AfterEach
    public void tearDown(){
        System.setOut(out);
        System.setErr(err);
    }

}
