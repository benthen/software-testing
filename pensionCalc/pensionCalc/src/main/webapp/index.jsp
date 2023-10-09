<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SSE3305 Individual Assignment</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

<style>
.footer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #187B9F;
	color: white;
	text-align: center;
}
</style>

<script type="text/javascript">
	function validateForm() {

		var daysofmontharray = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30,
				31, 30, 31)
		tform = document.form1;

		b = parseInt(tform.tlahir2.value);
		if (isNaN(b) || ((b == 0) || (b > 12))) {
			alert("Wrong Birthdate!!");
			return false;
		}

		h = parseInt(tform.tlahir1.value);
		bul = parseInt(tform.tlahir2.value);
		if (isNaN(b) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
			alert("Wrong Birthdate!!");
			return false;
		}

		th = tform.tlahir3.value;
		if (th.length !== 4) {
			alert("Year of Birthdate must be four digits!");
			return false;
		}

		b = parseInt(tform.tmkhidmat2.value);
		if (isNaN(b) || ((b == 0) || (b > 12))) {
			alert("Wrong Service Commencement Date!!");
			return false;
		}

		h = parseInt(tform.tmkhidmat1.value);
		bul = parseInt(tform.tmkhidmat2.value);
		if (isNaN(h) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
			alert("Wrong Service Commencement Date!!");
			return false;
		}

		th = tform.tmkhidmat3.value;
		if (th.length !== 4) {
			alert("Year of Service Commencement Date must be four digits!");
			return false;
		}

		if (isNaN(parseInt(tform.gaji.value))) {
			alert("Wrong Salary!!");
			return false;
		}

		if (isNaN(parseInt(tform.imbuhant.value))) {
			alert("Wrong Allowance!!");
			return false;
		}

		if (isNaN(parseInt(tform.gcuti.value))) {
			alert("Wrong Cash Award In Lieu of Leave!!");
			return false;
		}

		if (tform.cutitahun.value == null || tform.cutitahun.value == "") {
			tform.cutitahun.value = 00;
		}

		if (tform.cutibulan.value == null || tform.cutibulan.value == "") {
			tform.cutibulan.value = 00;
		}

		if (tform.cutihari.value == null || tform.cutihari.value == "") {
			tform.cutihari.value = 00;
		}

		if (isNaN(parseInt(tform.cutitahun.value))) {
			alert("Wrong Unpaid Leave!!");
			return false;
		}

		if (isNaN(parseInt(tform.cutibulan.value))) {
			alert("Wrong Unpaid Leave!!");
			return false;
		}

		if (isNaN(parseInt(tform.cutihari.value))) {
			alert("Wrong Unpaid Leave!!");
			return false; 
		}

		if ((tform.jantina[0].checked != 1) && (tform.jantina[1].checked != 1)) {
			alert("Wrong Gender!!");
			return false;
		}

		b = parseInt(tform.tsarapilih2.value);
		if (isNaN(b) || ((b == 0) || (b > 12))) {
			alert("Wrong Optional Retirement Date!!");
			return false;
		}

		h = parseInt(tform.tsarapilih1.value);
		bul = parseInt(tform.tsarapilih2.value);
		if (isNaN(h) || ((h == 0) || (h > daysofmontharray[bul - 1]))) {
			alert("Wrong Optional Retirement Date!!");
			return false;
		}

		th = tform.tsarapilih3.value;
		if (th.length !== 4) {
			alert("Wrong Optional Retirement Date!!");
			return false;
		}
	}
</script>


</head>
<body>
	<form id=form1 name=form1 action="PensionController?action=CALCULATE"
		onSubmit="return validateForm()" method="POST">
		<hr>
		<div align="center">
			<h3>Software Testing Individual Assignment</h3>
			<h5>Estimate Computation of Pension, Gratuity, and GCR Payments
				for Optional Retirement</h5>
			<hr>
			<table border=1>
				<tr>
					<td align=right bgcolor="#99CCFF" width="370" height="20"><font
						face="Verdana" size="2">Birth Date:</font></td>
					<td colspan=3 bgcolor="#99CCFF" width="385" height="20"><font
						size="2" face="Verdana"> <input id=tlahir1 name=tlahir1
							maxlength=2 size="2" value="${tlahir1}"> &nbsp;/
					</font> <font face="Verdana" size="1"> <font size="2"> <input
								id=tlahir2 name=tlahir2 maxlength=2 size="2" value="${tlahir2}"></font><font
							face="Verdana" size="2"> &nbsp;/ </font><font size="2"> <input
								id=tlahir3 name=tlahir3 maxlength=4 size="4" value="${tlahir3}"></font><font
							face="Verdana" size="2"> </font>
					</font></td>
				</tr>
				<tr>
					<td align=right bgcolor="#CCFFFF" width="347" height="20"><font
						face="Verdana" size="2">Service Commencement Date:</font></td>
					<td colspan=3 bgcolor="#CCFFFF" width="385" height="20"><font
						size="2" face="Verdana"> <input id=tmkhidmat1
							name=tmkhidmat1 maxlength=2 size="2" value="${tmkhidmat1}">
							&nbsp;/
					</font> <font face="Verdana" size="1"> <font size="2"> <input
								id=tmkhidmat2 name=tmkhidmat2 maxlength=2 size="2"
								value="${tmkhidmat2}"></font><font face="Verdana" size="2">
								&nbsp;/ </font><font size="2"> <input id=tmkhidmat3
								name=tmkhidmat3 maxlength=4 size=4 value="${tmkhidmat3}"></font><font
							face="Verdana" size="2"> </font>
					</font></td>
				</tr>
				<tr>
					<td align=right bgcolor="#99CCFF" width="347" height="20"><font
						face="Verdana" size="2">Last Drawn Salary (Substantive)
							Upon Optional Retirement Date: </font>
					<td colspan=3 bgcolor="#99CCFF" width="385" height="20"><font
						size="2" face="Verdana"> <input id=gaji name=gaji size=6
							value="${gaji}">
					</font></td>
				</tr>
				<tr>
					<td align=right bgcolor="#CCFFFF" width="347" height="20"><font
						face="Verdana" size="2">*Fixed Allowances:</font></td>
					<td colspan=3 bgcolor="#CCFFFF" width="385" height="20"><font
						size="2" face="Verdana"> <input id=imbuhant name=imbuhant
							size=6 value="${imbuhant}">
					</font></td>
				</tr>
				<tr>
					<td align=right bgcolor="#99CCFF" width="347" height="20"><font
						face="Verdana" size="2">Cash Award In Lieu of Leave
							(Maximum 150 Days):</font></td>
					<td colspan=3 bgcolor="#99CCFF" width="385" height="20"><font
						size="2" face="Verdana"> <input id=gcuti name=gcuti size=4
							value="${gcuti}"> Days
					</font></td>
				</tr>
				<tr>
					<td align=right bgcolor="#CCFFFF" width="347" height="16"><font
						face="Verdana" size="2">Unpaid Leave:</font></td>
					<td bgcolor="#CCFFFF" width="120" height="16"><font size="2">Year</font></td>
					<td bgcolor="#CCFFFF" width="120" height="16"><font size="2">Month</font></td>
					<td bgcolor="#CCFFFF" width="120" height="16"><font size="2">Day</font></td>
				</tr>

				<tr>
					<td bgcolor="#99CCFF" width="347" height="20"><font size="2"
						face="Verdana">&nbsp; </font></td>
					<td bgcolor="#99CCFF" width="120" height="20"><font size="2"
						face="Verdana"> <input id=cutitahun name=cutitahun size=2
							value="${cutitahun}">
					</font></td>
					<td bgcolor="#99CCFF" width="120" height="20"><font size="2"
						face="Verdana"> <input id=cutibulan name=cutibulan size=2
							value="${cutibulan}">
					</font></td>
					<td bgcolor="#99CCFF" width="120" height="20"><font size="2"
						face="Verdana"> <input id=cutihari name=cutihari size=4
							value="${cutihari}" onblur="myDefaultVal()">
					</font></td>
				</tr>
				<tr>
					<c:set var="jantina" value="${jantina}" />
					<td bgcolor="#CCFFFF" width="347" valign="top" align="right"
						height="42"><font face="Verdana" size="2">Gender: </font></td>
					<td bgcolor="#CCFFFF" width="235" colspan="2" height="42"><font
						size="2" face="Verdana"> <input type="radio" value="L"
							name="jantina" id="jantina"
							<c:if test="${jantina=='L'}">checked</c:if>> Male<br>
					</font> <font face="Verdana" size="1"> <font size="2"> <input
								type="radio" value="P" name="jantina" id="jantina"
								<c:if test="${jantina=='P'}">checked</c:if>>
						</font> <font face="Verdana" size="2"> Female</font></font></td>
					<td bgcolor="#CCFFFF" width="144" height="42"><font size="2"
						face="Verdana">&nbsp; </font></td>
				</tr>
				<tr>
					<td bgcolor="#99CCFF" width="347" valign="top" height="104">
						<table>
							<tr>
								<td width="100%" colspan="2" valign="top" height="12"><font
									size="2">Are you a male officer under these categories:</font></td>
							</tr>
							<tr>
								<td width="10%" valign="top" height="24"><font size="2"
									face="Verdana">(i)</font></td>
								<td width="90%" valign="top" height="24"><font size="2">Fire
										Officer (Grade KB11/KB10) or </font></td>
							</tr>
							<tr>
								<td width="10%" valign="top" height="12"><font size="2"
									face="Verdana">(ii)</font></td>
								<td width="90%" valign="top" height="12"><font size="2">(ii)
										Police Officer (from Grades Y14 till Y7) or</font></td>
							</tr>
							<tr>
								<td width="10%" valign="top" height="12"><font size="2"
									face="Verdana">(iii)</font></td>
								<td width="90%" valign="top" height="12"><font size="2">(iii)
										Prison Officer (from Grades KX12 till KX6) or</font></td>
							</tr>
							<tr>
								<td width="10%" valign="top" height="12"><font size="2"
									face="Verdana">(iv)</font></td>
								<td width="90%" valign="top" height="12"><font
									face="Verdana" size="2">Mental Hospital Nurse</font></td>
							</tr>
						</table>
					<td bgcolor="#99CCFF" width="385" colspan="3" valign="middle"
						height="104"><font size="2" face="Verdana"> <c:set
								var="listimewa" value="${listimewa}" /> <input type="radio"
							value="Y" name="listimewa" id="listimewa"
							<c:if test="${listimewa=='Y'}">checked</c:if>> Yes<br>
					</font> <font face="Verdana" size="1"> <font size="2"> <input
								type="radio" value="T" name="listimewa" id="listimewa"
								<c:if test="${listimewa=='T'}">checked</c:if>></font><font
							face="Verdana" size="2"> No</font></font></td>
				</tr>
				<tr>
					<td bgcolor="#CCFFFF" width="347" height="20"><font
						face="Verdana" size="2">Optional Retirement Date: : </font></td>
					<td bgcolor="#CCFFFF" width="385" colspan="3" height="20"><font
						face="Verdana" size="2">&nbsp; </font> <font face="Verdana"
						size="2"> <input id=tsarapilih1 name=tsarapilih1
							maxlength=2 value="${tsarapilih1}" size="2"></font><font
						face="Verdana" size="2"> &nbsp;/ </font> <font face="Verdana"
						size="2"><font size="2"> <input id=tsarapilih2
								name=tsarapilih2 maxlength=2 value="${tsarapilih2}" size="2"></font><font
							face="Verdana" size="2"> &nbsp;/ </font><font size="2"> <input
								id=tsarapilih3 name=tsarapilih3 maxlength=4
								value="${tsarapilih3}" size="2"></font><font face="Verdana"
							size="2"> </font> </font></td>
				</tr>
			</table>
			<hr>
			<div>
				<button type="submit" class="btn btn-info btn-lg" name="Button"
					value="CALCULATE">Calculate</button>
				<button type="reset" class="btn btn-info btn-lg" name="Button"
					value="RESET">Reset</button>
				<button type="button" class="btn btn-secondary btn-lg" name="Button"
					onclick="window.location.href = '/pensionCalc/readme.jsp'"
					value="README">Read Me</button>
			</div>
			<hr>
			<p></p>
			<p style="color: #b50e0e" align=center>${NOTIFICATION}</p>
			<table border=1>
				<tr>
					<td align="left" bgcolor="#CCFFFF" width="200"><font
						face="Verdana" size="2"><b>Pension Date:</b></font>&nbsp;</td>
					<td align="left" bgcolor="#CCFFFF" colspan="2" width="140"><font
						size="2" face="Verdana"> <input name="tsara" id="tsara"
							value="${tsara}" size="15">
					</font></td>
					<td align="right" bgcolor="#CCFFFF" width="220"><font
						face="Verdana" size="2"><b>Monthly Pension:</b></font></td>
					<td align="right" bgcolor="#CCFFFF" width="120"><font
						face="Verdana" size="2"><b>RM</b> </font><font face="Verdana"
						size="2"> <input id=jumpencen name=jumpencen
							value="${jumpencen}" size=8></font><font face="Verdana" size="2">
					</font></td>
				</tr>
				<tr>
					<td align="left" bgcolor="#99CCFF" width="224"><font
						face="Verdana" size="2"><b>Retirement Age:</b></font></td>
					<td align="left" bgcolor="#99CCFF" width="200"><font size="2"
						face="Verdana"> <input name="umursara1" id="umursara1"
							value="${umursara1}" size="2">
					</font> <b><font face="Verdana" size="2">Years </font><font
							face="Verdana" size="2"> <input name="umursara2"
								value="${umursara2}" id="umursara2" size="2"></font><font
							face="Verdana" size="2"> </font></b><font size="2"><b>Months</b></font></td>
					<td align="right" bgcolor="#99CCFF" colspan="2" width="177"><font
						face="Verdana" size="2"><b>Gratuity:</b></font></td>
					<td align="right" bgcolor="#99CCFF" width="120"><font
						face="Verdana" size="2"><b>RM </b> </font><font face="Verdana"
						size="2"> <input id=jumganjaran name=jumganjaran
							value="${jumganjaran}" size=8></font><font face="Verdana"
						size="2"> </font></td>
				</tr>
				<tr>
					<td align="left" bgcolor="#CCFFFF" width="224"><font
						face="Verdana" size="2"><b>Reckonable Period of
								Service:</b></font></td>
					<td align="left" bgcolor="#CCFFFF" width="140"><font size="2"
						face="Verdana"> <input name="bulankhid" id="bulankhid"
							value="${bulankhid}" size="2">
					</font> <font size="2"><b>Month</b></font></td>
					<td align="right" bgcolor="#CCFFFF" colspan="2" width="220"><font
						face="Verdana" size="2"><b>Cash Award in lieu of Leave:</b></font></td>
					<td align="right" bgcolor="#CCFFFF" width="120"><font
						face="Verdana" size="2"><b>RM </b> </font><font face="Verdana"
						size="2"> <input id=jumgcr name=jumgcr value="${jumgcr}"
							size=8></font><font face="Verdana" size="2"> </font></td>
				</tr>
			</table>
			<p>
				<font face="Verdana" style="font-size: 10pt"> This amount is
					subjected to debts owing to the Government/employer, if any</font>
			</p>
		</div>

		<div class="footer">
			<font face="Verdana" style="font-size: 9pt"> SSE3305: Software
				Testing, &nbsp;Department of Software Engineering and Information
				System,&nbsp; Faculty of Computer Science and Information
				Technology,&nbsp; Universiti Putra Malaysia </font>
		</div>
	</form>
</body>
</html>